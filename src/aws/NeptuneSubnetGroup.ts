import {Resource} from '../Resource'

export interface NeptuneSubnetGroupArguments {
  description?: string
  id?: string
  name?: string
  name_prefix?: string
  subnet_ids: Set<string>
  tags?: {[key: string]: string}
}

export interface NeptuneSubnetGroupAttributes {
  arn: string
  description?: string
  id: string
  name: string
  name_prefix: string
  subnet_ids: Set<string>
  tags?: {[key: string]: string}
}

export class NeptuneSubnetGroup extends Resource<NeptuneSubnetGroupArguments, NeptuneSubnetGroupAttributes> {
  kind = 'aws_neptune_subnet_group'
  _outputAttrNames = ['arn', 'description', 'id', 'name', 'name_prefix', 'subnet_ids', 'tags'] as const
}
