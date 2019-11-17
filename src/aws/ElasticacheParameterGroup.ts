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
  kind = 'aws_elasticache_parameter_group'
  _outputAttrNames = ['description', 'family', 'id', 'name'] as const
}
