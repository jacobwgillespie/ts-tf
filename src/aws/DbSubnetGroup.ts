import {Resource} from '../Resource'

export interface DbSubnetGroupArguments {
  description?: string
  id?: string
  name?: string
  name_prefix?: string
  subnet_ids: Set<string>
  tags?: {[key: string]: string}
}

export interface DbSubnetGroupAttributes {
  arn: string
  description?: string
  id: string
  name: string
  name_prefix: string
  subnet_ids: Set<string>
  tags?: {[key: string]: string}
}

export class DbSubnetGroup extends Resource<DbSubnetGroupArguments, DbSubnetGroupAttributes> {
  kind = 'aws_db_subnet_group'
  _outputAttrNames = ['arn', 'description', 'id', 'name', 'name_prefix', 'subnet_ids', 'tags'] as const
}
