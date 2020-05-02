export type ProvidersSchema = {
  readonly format_version: '0.1'
  readonly provider_schemas: {
    readonly [providerName: string]: {
      readonly provider: SchemaRepresentation

      readonly resource_schemas: {
        readonly [resourceName: string]: SchemaRepresentation
      }

      readonly data_source_schemas: {
        readonly [dataSourceName: string]: SchemaRepresentation
      }
    }
  }
}

export type SchemaRepresentation = {
  readonly version: number
  readonly block: Block
}

export type Block = {
  readonly attributes?: {
    readonly [attributeName: string]: Attribute
  }
  readonly block_types: {
    readonly [blockName: string]: {
      readonly nesting_mode: 'single' | 'group' | 'list' | 'set' | 'map'
      readonly block: Block
      readonly min_items?: number
      readonly max_items?: number
    }
  }
}

export type AttributeType =
  | 'any'
  | 'bool'
  | 'number'
  | 'string'
  | readonly ['list', AttributeType]
  | readonly ['map', AttributeType]
  | readonly ['object', {readonly [name: string]: AttributeType}]
  | readonly ['set', AttributeType]

export type Attribute = {
  readonly type: AttributeType
  readonly description?: string
  readonly description_kind?: string
  readonly required?: boolean
  readonly optional?: boolean
  readonly computed?: boolean
  readonly sensitive?: boolean
}
