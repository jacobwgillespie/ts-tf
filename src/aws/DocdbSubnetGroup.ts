import {Resource} from '../Resource'

export interface DocdbSubnetGroupArguments {
  description?: string
  id?: string
  name?: string
  name_prefix?: string
  subnet_ids: Set<string>
  tags?: {[key: string]: string}
}

export interface DocdbSubnetGroupAttributes {
  arn: string
  description?: string
  id: string
  name: string
  name_prefix: string
  subnet_ids: Set<string>
  tags?: {[key: string]: string}
}

export class DocdbSubnetGroup extends Resource<DocdbSubnetGroupArguments, DocdbSubnetGroupAttributes> {
  kind = 'aws_docdb_subnet_group'
  _outputAttrNames = ['arn', 'description', 'id', 'name', 'name_prefix', 'subnet_ids', 'tags'] as const
}
