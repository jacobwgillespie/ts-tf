import {Resource} from '../Resource'

export interface ElasticacheSecurityGroupArguments {
  description?: string
  id?: string
  name: string
  security_group_names: Set<string>
}

export interface ElasticacheSecurityGroupAttributes {
  description?: string
  id: string
  name: string
  security_group_names: Set<string>
}

export class ElasticacheSecurityGroup extends Resource<
  ElasticacheSecurityGroupArguments,
  ElasticacheSecurityGroupAttributes
> {
  kind = 'aws_elasticache_security_group'
  _outputAttrNames = ['description', 'id', 'name', 'security_group_names'] as const
}
