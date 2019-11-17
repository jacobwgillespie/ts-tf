import {Resource} from '../Resource'

export interface DaxSubnetGroupArguments {
  description?: string
  id?: string
  name: string
  subnet_ids: Set<string>
}

export interface DaxSubnetGroupAttributes {
  description?: string
  id: string
  name: string
  subnet_ids: Set<string>
  vpc_id: string
}

export class DaxSubnetGroup extends Resource<DaxSubnetGroupArguments, DaxSubnetGroupAttributes> {
  kind = 'aws_dax_subnet_group'
  _outputAttrNames = ['description', 'id', 'name', 'subnet_ids', 'vpc_id'] as const
}
