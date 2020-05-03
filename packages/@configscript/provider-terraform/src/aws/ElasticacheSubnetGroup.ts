import {Resource} from '../Resource'

export interface ElasticacheSubnetGroupArguments {
  description?: string
  id?: string
  name: string
  subnet_ids: Set<string>
}

export interface ElasticacheSubnetGroupAttributes {
  description?: string
  id: string
  name: string
  subnet_ids: Set<string>
}

export class ElasticacheSubnetGroup extends Resource<
  ElasticacheSubnetGroupArguments,
  ElasticacheSubnetGroupAttributes
> {
  _kind = 'aws_elasticache_subnet_group'

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get subnet_ids() {
    return this._attr('subnet_ids')
  }
}
