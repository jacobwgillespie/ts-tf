import * as fastCase from 'fast-case'
import {formatTypeScript} from './prettier'
import {
  Attribute,
  AttributeType,
  Block,
  NestedBlockMetadata,
  NestingMode,
  SchemaRepresentation,
} from './types/ProvidersSchema'

export function tfTypeToTSType(type: AttributeType): string {
  // Parse the simple types
  switch (type) {
    case 'any':
      // TODO: can we generate a generic type?
      return 'unknown'

    case 'bool':
      return 'boolean'

    case 'number':
      return 'number'

    case 'string':
      return 'string'

    default:
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
}

function nestingModeToTSType(nestingMode: NestingMode): [string, string] {
  switch (nestingMode) {
    case 'list':
      return ['Array<', '>']

    case 'map':
      return ['Record<string, ', '>']

    case 'set':
      return ['Set<', '>']

    case 'group':
    case 'single':
      return ['', '']
  }
}

function parseNestedBlock(terraformName: string, metadata: NestedBlockMetadata): TypeScriptNestedBlock {
  const optional = metadata.min_items === undefined || metadata.min_items === 0 ? true : false

  // If this can only allow a single item, treat it as a single type
  const tsType = metadata.max_items === 1 ? nestingModeToTSType('single') : nestingModeToTSType(metadata.nesting_mode)
  const innerBlock = parseBlock(metadata.block)
  return {
    ...metadata,
    ...innerBlock,
    name: fastCase.camelize(terraformName),
    tfName: terraformName,
    tsType,
    optional,
  }
}

export interface TypeScriptAttribute extends Attribute {
  name: string
  tfName: string
  tsType: string
}

interface TypeScriptNestedBlock extends BlockMetadata, NestedBlockMetadata {
  name: string
  tfName: string
  tsType: [string, string]
  optional: boolean
}

interface BlockMetadata {
  attributes: TypeScriptAttribute[]
  blocks: TypeScriptNestedBlock[]
}

export function parseBlock(block: Block): BlockMetadata {
  const metadata: BlockMetadata = {
    attributes: [],
    blocks: [],
  }

  const blockAttributes = block.attributes ?? {}
  const attributeKeys = Object.keys(blockAttributes)

  attributeKeys.forEach((attributeName) => {
    const attribute = blockAttributes[attributeName]
    metadata.attributes.push({
      ...attribute,
      name: fastCase.camelize(attributeName),
      tfName: attributeName,
      tsType: tfTypeToTSType(attribute.type),
    })
  })

  const blockTypes = block.block_types
  if (blockTypes !== undefined) {
    Object.keys(blockTypes).forEach((nestedBlockName) => {
      const nestedBlock = blockTypes[nestedBlockName]
      metadata.blocks.push(parseNestedBlock(nestedBlockName, nestedBlock))
    })
  }

  return metadata
}

function attributesToInterfaceProperty(attributes: TypeScriptAttribute[]) {
  return attributes
    .filter((attribute) => !attribute.computed)
    .map((attribute) => {
      const description = attribute.description === undefined ? '' : `/** ${attribute.description} */\n`
      const modifier = attribute.required ? ':' : '?:'
      return `${description}${attribute.name}${modifier} Prop<${attribute.tsType}>`
    })
}

export function generateResourceClass(resourceName: string, resource: SchemaRepresentation): string {
  const block = parseBlock(resource.block)

  const propsInterfaceAttributes = attributesToInterfaceProperty(block.attributes)

  const propsInterfaceBlocks = block.blocks.map((nestedBlock) => {
    const innerAttributes = attributesToInterfaceProperty(nestedBlock.attributes)

    const modifier = nestedBlock.optional ? '?:' : ':'
    let [wrapBefore, wrapAfter] = nestedBlock.tsType
    if (wrapBefore !== '') wrapBefore = `${wrapBefore}Prop<`
    if (wrapAfter !== '') wrapAfter = `>${wrapAfter}`
    return `${nestedBlock.name}${modifier} Prop<${wrapBefore}{${innerAttributes.join('\n')}}${wrapAfter}>`
  })

  const propsInterface = `interface ${resourceName}Props {
        ${propsInterfaceAttributes.join('\n')}
        ${propsInterfaceBlocks.join('\n')}
      }`

  const props = block.attributes.map((attribute) => {
    const description = attribute.description === undefined ? '' : `/** ${attribute.description} */\n`

    if (attribute.computed === true) {
      if (attribute.optional === true) {
        return `${description}${attribute.name}: Prop<${attribute.tsType}> = new ReferenceProp((r) => r({} as any), this)`
      }

      return `${description}get ${attribute.name}(): Prop<${attribute.tsType}> { return new ReferenceProp((r) => r({} as any), this) }`
    }

    return `${description}${attribute.name} = this.$attr('${attribute.name}')`
  })

  return formatTypeScript(`
import {Prop, ReferenceProp} from '@infrascript/core'
import {TerraformResource} from '../../TerraformResource'

${propsInterface}

export class ${resourceName} extends TerraformResource<${resourceName}Props> {
  ${props.join('\n\n')}

  __metadata = ${JSON.stringify(block)}
}
`)
}
