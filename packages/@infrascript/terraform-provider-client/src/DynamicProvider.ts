import {decodeCtyType} from './CtyTypes'
import {Provider} from './Provider'
import {ObjectProperties, SchemaType, T} from './TypeSystem'

export class DynamicProvider {
  #client: Provider

  constructor(client: Provider) {
    this.#client = client
  }

  get client(): Provider {
    return this.#client
  }

  async getConfigureSchemaType(): Promise<SchemaType> {
    const schema = await this.#client.getSchema({})
    if (!schema.provider) {
      throw new Error('Unable to read provider schema')
    }

    const schemaAttributes = schema.provider.block?.attributes ?? []
    const attrs: ObjectProperties = {}

    for (const attribute of schemaAttributes) {
      if (!attribute.type) {
        throw new Error('Unable to read attribute type')
      }

      if (attribute.name == null) {
        throw new Error('Unable to read attribute name')
      }

      console.log(attribute)
      console.log(decodeCtyType(attribute.type))
      attrs[attribute.name] = T.object({a: T.string(), b: T.number()})
      if (attribute.optional) {
        attrs[attribute.name] = T.optional(attrs[attribute.name])
      }
    }

    return T.object(attrs)
  }
}