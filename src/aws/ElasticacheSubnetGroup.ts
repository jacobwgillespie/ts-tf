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
  kind = 'aws_elasticache_subnet_group'
  _outputAttrNames = ['description', 'id', 'name', 'subnet_ids'] as const
}
