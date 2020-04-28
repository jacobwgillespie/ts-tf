import is from '@sindresorhus/is'
import fastCase from 'fast-case'
import prettier from 'prettier'
import {assertNever} from '../utils'
import {ConfigSchema} from './configSchema'
import {AttributeType, Block} from './providerSchema'
import {parseTypeString} from './typeStringParser'

export function tfTypeToTSType(type: AttributeType): string {
  // Handle multiple valid types
  if (is.array(type)) {
    if (type.length !== 2) {
      assertNever(type)
    }
    switch (type[0]) {
      case 'list':
        return `Array<${tfTypeToTSType(type[1])}>`

      case 'map':
        return `Record<string, ${tfTypeToTSType(type[1])}>`

      case 'object': {
        if (!is.plainObject(type[1])) {
          assertNever(type[1])
        }
        const keys = Object.keys(type[1])
        const inside = keys.map((key) => `"${key}": ${tfTypeToTSType(type[1][key])}`).join('; ')
        return `{${inside}}`
      }

      case 'set':
        return `Set<${tfTypeToTSType(type[1])}>`

      default:
        assertNever(type)
    }
  }

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
      assertNever(type)
  }
}

function buildBlockAttributes(block: Block, argumentsOnly = false): string[] {
  const interfaceAttributes: string[] = []

  const attributeKeys = block.attributes ? Object.keys(block.attributes) : []
  const validAttributeKeys = argumentsOnly
    ? attributeKeys.filter((attributeName) => {
        const attribute = block.attributes[attributeName]
        return attribute.required || (attribute.optional && attributeName !== 'id')
      })
    : attributeKeys

  for (const attributeName of validAttributeKeys) {
    const attribute = block.attributes[attributeName]
    const modifier = (!argumentsOnly && attribute.computed) || attribute.required ? ':' : '?:'
    if (attribute.description) {
      interfaceAttributes.push(`/** ${attribute.description} */`)
    }
    interfaceAttributes.push(`"${attributeName}"${modifier} ${tfTypeToTSType(attribute.type)}`)
  }

  if (argumentsOnly && block.block_types) {
    for (const nestedBlockName of Object.keys(block.block_types)) {
      const nestedBlock = block.block_types[nestedBlockName]
      const modifier = is.number(nestedBlock.min_items) && nestedBlock.min_items > 0 ? ':' : '?:'
      const inner = buildBlockAttributes(nestedBlock.block).join('\n')

      switch (nestedBlock.nesting_mode) {
        case 'list': {
          interfaceAttributes.push(`"${nestedBlockName}"${modifier} Array<{\n${inner}\n}>`)
          break
        }

        case 'map':
          interfaceAttributes.push(`"${nestedBlockName}"${modifier} Record<string, {\n${inner}\n}>`)
          break

        case 'set':
          interfaceAttributes.push(`"${nestedBlockName}"${modifier} Set<{\n${inner}\n}>`)
          break

        case 'group':
        case 'single':
          interfaceAttributes.push(`"${nestedBlockName}"${modifier} {\n${inner}\n}`)
          break

        default:
          assertNever(nestedBlock.nesting_mode)
      }
    }
  }

  return interfaceAttributes
}

export function buildBlockInterface(name: string, block: Block, argumentsOnly = false): {name: string; code: string} {
  const interfaceAttributes: string[] = buildBlockAttributes(block, argumentsOnly)
  const interfaceName = `${fastCase.pascalize(name)}${argumentsOnly ? 'Arguments' : 'Attributes'}`

  return {
    name: interfaceName,
    code: format(`interface ${interfaceName} {\n${interfaceAttributes.join('\n')}\n}`),
  }
}

export function buildModuleVariableInterface(name: string, schema: ConfigSchema) {
  const interfaceAttributes: string[] = []

  const variableNames = Object.keys(schema.variables)
  for (const variableName of variableNames) {
    const variable = schema.variables[variableName]
    const variableType = variable.type ? parseTypeString(variable.type) : 'any'
    const modifier = variable.default === undefined ? ':' : '?:'
    if (variable.description) {
      interfaceAttributes.push(`/** ${variable.description} */`)
    }
    interfaceAttributes.push(`"${variableName}"${modifier} ${tfTypeToTSType(variableType)}`)
  }

  const interfaceName = `${fastCase.pascalize(name)}Arguments`
  return {
    name: interfaceName,
    code: format(`interface ${interfaceName} {\n${interfaceAttributes.join('\n')}\n}`),
  }
}

function format(code: string): string {
  return prettier.format(code, {...require('../../package.json').prettier, parser: 'typescript'})
}
