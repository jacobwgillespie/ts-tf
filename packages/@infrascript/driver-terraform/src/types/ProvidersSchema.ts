export interface ProvidersSchema {
  format_version: '0.1'
  provider_schemas: {
    [providerName: string]: {
      provider: SchemaRepresentation

      resource_schemas: {
        [resourceName: string]: SchemaRepresentation
      }

      data_source_schemas: {
        [dataSourceName: string]: SchemaRepresentation
      }
    }
  }
}

export interface SchemaRepresentation {
  version: number
  block: Block
}

export interface Block {
  attributes?: {
    [attributeName: string]: Attribute
  }
  block_types?: {
    [blockName: string]: NestedBlockMetadata
  }
}

export type NestingMode = 'single' | 'group' | 'list' | 'set' | 'map'

export interface NestedBlockMetadata {
  nesting_mode: NestingMode
  block: Block
  min_items?: number
  max_items?: number
}

export type AttributeType =
  | 'any'
  | 'bool'
  | 'number'
  | 'string'
  | ['list', AttributeType]
  | ['map', AttributeType]
  | ['object', {[name: string]: AttributeType}]
  | ['set', AttributeType]

export interface Attribute {
  type: AttributeType
  description?: string
  description_kind?: string
  required?: boolean
  optional?: boolean
  computed?: boolean
  sensitive?: boolean
}
