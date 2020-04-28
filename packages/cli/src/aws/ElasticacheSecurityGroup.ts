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
  _kind = 'aws_elasticache_security_group'

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get security_group_names() {
    return this._attr('security_group_names')
  }
}
