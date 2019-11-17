import {Resource} from '../Resource'

export interface DocdbClusterParameterGroupArguments {
  description?: string
  family: string
  id?: string
  name?: string
  name_prefix?: string
  tags?: {[key: string]: string}
}

export interface DocdbClusterParameterGroupAttributes {
  arn: string
  description?: string
  family: string
  id: string
  name: string
  name_prefix: string
  tags?: {[key: string]: string}
}

export class DocdbClusterParameterGroup extends Resource<
  DocdbClusterParameterGroupArguments,
  DocdbClusterParameterGroupAttributes
> {
  kind = 'aws_docdb_cluster_parameter_group'
  _outputAttrNames = ['arn', 'description', 'family', 'id', 'name', 'name_prefix', 'tags'] as const
}
