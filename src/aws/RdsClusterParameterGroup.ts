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
  kind = 'aws_rds_cluster_parameter_group'
  _outputAttrNames = ['arn', 'description', 'family', 'id', 'name', 'name_prefix', 'tags'] as const
}
