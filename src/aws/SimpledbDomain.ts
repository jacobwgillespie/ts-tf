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
  kind = 'aws_simpledb_domain'
  _outputAttrNames = ['id', 'name'] as const
}
