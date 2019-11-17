import {Resource} from '../Resource'

export interface RedshiftSubnetGroupArguments {
  description?: string
  id?: string
  name: string
  subnet_ids: Set<string>
  tags?: {[key: string]: string}
}

export interface RedshiftSubnetGroupAttributes {
  arn: string
  description?: string
  id: string
  name: string
  subnet_ids: Set<string>
  tags?: {[key: string]: string}
}

export class RedshiftSubnetGroup extends Resource<RedshiftSubnetGroupArguments, RedshiftSubnetGroupAttributes> {
  kind = 'aws_redshift_subnet_group'
  _outputAttrNames = ['arn', 'description', 'id', 'name', 'subnet_ids', 'tags'] as const
}
