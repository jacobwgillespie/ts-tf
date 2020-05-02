import {Resource} from '../Resource'

export interface ElasticacheParameterGroupArguments {
  description?: string
  family: string
  id?: string
  name: string
}

export interface ElasticacheParameterGroupAttributes {
  description?: string
  family: string
  id: string
  name: string
}

export class ElasticacheParameterGroup extends Resource<
  ElasticacheParameterGroupArguments,
  ElasticacheParameterGroupAttributes
> {
  _kind = 'aws_elasticache_parameter_group'

  get description() {
    return this._attr('description')
  }

  get family() {
    return this._attr('family')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }
}
