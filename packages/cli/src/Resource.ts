import {AttributeReference} from './AttributeReference'
import {StringKeyOf} from './types'

export type ArgumentsWithReferences<T> = {
  [K in keyof T]: T[K] extends object
    ? T[K] | AttributeReference<T[K]> | Resource<any, T[K]>
    : T[K] | AttributeReference<T[K]>
}

export abstract class Resource<Arguments, Attributes> {
  abstract readonly _kind: string

  _name: string
  private _inputAttrs: ArgumentsWithReferences<Arguments>

  constructor(name: string, attrs: ArgumentsWithReferences<Arguments>) {
    this._name = name
    this._inputAttrs = attrs
  }

  protected _attr<K extends StringKeyOf<Attributes>>(key: K): AttributeReference<Attributes[K]> {
    return new AttributeReference<Attributes[K]>(this, this._kind, this._name, key)
  }

  /**
   * collect starts with a resource and discovers all other resources referenced by input attributes
   */
  collect(): Resource<any, any>[] {
    const resources: Resource<any, any>[] = [this]

    for (const attrName in this._inputAttrs) {
      const attr = this._inputAttrs[attrName]
      if (attr instanceof AttributeReference) {
        resources.push(...attr.parent.collect())
      } else if (attr instanceof Resource) {
        resources.push(...attr.collect())
      }
    }

    return resources
  }

  toReference() {
    return `\${${this._kind}.${this._name}}`
  }

  toJSON() {
    return Object.entries(this._inputAttrs).reduce(
      (obj, [k, v]) => (v === undefined ? obj : {...obj, [k]: v instanceof Resource ? v.toReference() : v}),
      {},
    )
  }
}
