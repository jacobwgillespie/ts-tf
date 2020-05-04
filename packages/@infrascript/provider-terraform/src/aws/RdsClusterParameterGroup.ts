import {Resource} from '../Resource'

export interface RdsClusterParameterGroupArguments {
  description?: string
  family: string
  id?: string
  name?: string
  name_prefix?: string
  tags?: {[key: string]: string}
}

export interface RdsClusterParameterGroupAttributes {
  arn: string
  description?: string
  family: string
  id: string
  name: string
  name_prefix: string
  tags?: {[key: string]: string}
}

export class RdsClusterParameterGroup extends Resource<
  RdsClusterParameterGroupArguments,
  RdsClusterParameterGroupAttributes
> {
  _kind = 'aws_rds_cluster_parameter_group'

  get arn() {
    return this._attr('arn')
  }

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

  get name_prefix() {
    return this._attr('name_prefix')
  }

  get tags() {
    return this._attr('tags')
  }
}
