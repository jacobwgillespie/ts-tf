import {AttributeReference, AttributeReferencesOf} from './AttributeReference'

type ArgumentsWithReferences<T> = {
  [K in keyof T]: T[K] extends object
    ? T[K] | AttributeReference<T[K]> | Resource<any, T[K]>
    : T[K] | AttributeReference<T[K]>
}

// type StringKeyOf<T> = Extract<keyof T, string>

export abstract class Resource<Arguments, Attributes> {
  abstract readonly kind: string

  name: string
  private _inputAttrs: ArgumentsWithReferences<Arguments>

  constructor(name: string, attrs: ArgumentsWithReferences<Arguments>) {
    this.name = name
    this._inputAttrs = attrs
  }

  get attrs(): AttributeReferencesOf<Attributes> {
    const resource = this
    const proxy = new Proxy({} as AttributeReferencesOf<Attributes>, {
      get(_target, key) {
        if (typeof key === 'string') {
          return new AttributeReference<Attributes[typeof name]>(resource, resource.kind, resource.name, key)
        }
        return undefined
      },
    })
    return proxy
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
    return `\${${this.kind}.${this.name}}`
  }

  toJSON() {
    return Object.entries(this._inputAttrs).reduce(
      (obj, [k, v]) => (v === undefined ? obj : {...obj, [k]: v instanceof Resource ? v.toReference() : v}),
      {},
    )
  }
}
