import {Resource} from '../Resource'

export interface NeptuneClusterParameterGroupArguments {
  description?: string
  family: string
  id?: string
  name?: string
  name_prefix?: string
  tags?: {[key: string]: string}
}

export interface NeptuneClusterParameterGroupAttributes {
  arn: string
  description?: string
  family: string
  id: string
  name: string
  name_prefix: string
  tags?: {[key: string]: string}
}

export class NeptuneClusterParameterGroup extends Resource<
  NeptuneClusterParameterGroupArguments,
  NeptuneClusterParameterGroupAttributes
> {
  _kind = 'aws_neptune_cluster_parameter_group'

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
