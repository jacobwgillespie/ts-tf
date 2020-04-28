import {Resource} from '../Resource'

export interface SimpledbDomainArguments {
  id?: string
  name: string
}

export interface SimpledbDomainAttributes {
  id: string
  name: string
}

export class SimpledbDomain extends Resource<SimpledbDomainArguments, SimpledbDomainAttributes> {
  _kind = 'aws_simpledb_domain'

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }
}
