import {Resource} from './Resource'

export type ArgumentsWithAttributeReferences<T> = {
  [K in keyof T]: T[K] | AttributeReference<T[K]>
}

export type AttributeReferencesOf<T> = {
  [K in keyof T]-?: AttributeReference<T[K]>
}

export class AttributeReference<AttributeType> {
  parent: Resource<any, any>
  parentKind: string
  parentName: string
  name: string

  constructor(parent: Resource<any, any>, parentKind: string, parentName: string, name: string) {
    this.parent = parent
    this.parentKind = parentKind
    this.parentName = parentName
    this.name = name
  }

  toJSON() {
    return `\${${this.parentKind}.${this.parentName}.${this.name}}`
  }

  // TypeScript compiler hack, this forces type checking
  __type(): AttributeType {
    return {} as any
  }
}
