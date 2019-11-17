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
  kind = 'aws_neptune_cluster_parameter_group'
  _outputAttrNames = ['arn', 'description', 'family', 'id', 'name', 'name_prefix', 'tags'] as const
}
