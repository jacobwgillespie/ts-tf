import prettierConfig from '@infrascript/config-prettier'
import {AttributeType, Block, ConfigSchema} from '@infrascript/types'
import is from '@sindresorhus/is'
import fastCase from 'fast-case'
import prettier from 'prettier'
import {parseTypeString} from './typeStringParser'

type ArrayAttribute<T = AttributeType> = T extends unknown[] ? T : never

function tfArrayTypeToTSType(type: ArrayAttribute): string {
  switch (type[0]) {
    case 'list':
      return `Array<${tfTypeToTSType(type[1])}>`

    case 'map':
      return `Record<string, ${tfTypeToTSType(type[1])}>`

    case 'object': {
      const keys = Object.keys(type[1])
      const inside = keys.map((key) => `"${key}": ${tfTypeToTSType(type[1][key])}`).join('; ')
      return `{${inside}}`
    }

    case 'set':
      return `Set<${tfTypeToTSType(type[1])}>`
  }
}

export function tfTypeToTSType(type: AttributeType): string {
  // Parse the simple types
  switch (type) {
    case 'any':
      // TODO: is this ever used? Can we remove or return a generic type?
      return 'unknown'

    case 'bool':
      return 'boolean'

    case 'number':
      return 'number'

    case 'string':
      return 'string'

    default:
      return tfArrayTypeToTSType(type)
  }
}

function buildBlockAttributes(block: Block, argumentsOnly = false): string[] {
  const blockAttributes = block.attributes ?? {}
  const attributeKeys = Object.keys(blockAttributes)
  const validAttributeKeys =
    block.attributes != undefined && argumentsOnly
      ? Object.keys(block.attributes).filter((attributeName) => {
          const attribute = blockAttributes[attributeName]
          return attribute.required || (attribute.optional && attributeName !== 'id')
        })
      : attributeKeys

  const interfaceAttributes = validAttributeKeys.flatMap((attributeName) => {
    const attribute = blockAttributes[attributeName]
    const modifier =
      (argumentsOnly && (attribute.computed || attribute.optional)) ||
      (!argumentsOnly && !attribute.computed && !attribute.required)
        ? '?:'
        : ':'
    const interfaceAttribute = `"${attributeName}"${modifier} ${tfTypeToTSType(attribute.type)}`
    return attribute.description !== undefined
      ? [`/** ${attribute.description} */`, interfaceAttribute]
      : interfaceAttribute
  })

  const interfaceBlockAttributes =
    argumentsOnly && block.block_types
      ? Object.keys(block.block_types).map((nestedBlockName) => {
          const nestedBlock = block.block_types[nestedBlockName]
          const modifier = is.number(nestedBlock.min_items) && nestedBlock.min_items > 0 ? ':' : '?:'
          const inner = buildBlockAttributes(nestedBlock.block, argumentsOnly).join('\n')

          switch (nestedBlock.nesting_mode) {
            case 'list':
              return `"${nestedBlockName}"${modifier} Array<{\n${inner}\n}>`

            case 'map':
              return `"${nestedBlockName}"${modifier} Record<string, {\n${inner}\n}>`

            case 'set':
              return `"${nestedBlockName}"${modifier} Set<{\n${inner}\n}>`

            case 'group':
            case 'single':
              return `"${nestedBlockName}"${modifier} {\n${inner}\n}`
          }
        })
      : []

  return [...interfaceAttributes, ...interfaceBlockAttributes]
}

export function buildBlockInterface(name: string, block: Block, argumentsOnly = false): {name: string; code: string} {
  const interfaceAttributes = buildBlockAttributes(block, argumentsOnly)
  const interfaceName = `${fastCase.pascalize(name)}${argumentsOnly ? 'Arguments' : 'Attributes'}`

  return {
    name: interfaceName,
    code: format(`interface ${interfaceName} {\n${interfaceAttributes.join('\n')}\n}`),
  }
}

export function buildModuleVariableInterface(name: string, schema: ConfigSchema): {name: string; code: string} {
  const interfaceAttributes = Object.keys(schema.variables).flatMap((variableName) => {
    const variable = schema.variables[variableName]
    const variableType = variable.type != undefined ? parseTypeString(variable.type) : 'any'
    const modifier = variable.default === undefined ? ':' : '?:'
    const interfaceAttribute = `"${variableName}"${modifier} ${tfTypeToTSType(variableType)}`
    return variable.description != undefined
      ? [`/** ${variable.description} */`, interfaceAttribute]
      : interfaceAttribute
  })

  const interfaceName = `${fastCase.pascalize(name)}Arguments`
  return {
    name: interfaceName,
    code: format(`interface ${interfaceName} {\n${interfaceAttributes.join('\n')}\n}`),
  }
}

function format(code: string): string {
  return prettier.format(code, {...prettierConfig, parser: 'typescript'})
}
