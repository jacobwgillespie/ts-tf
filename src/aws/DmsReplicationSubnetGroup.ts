import {Resource} from '../Resource'

export interface DmsReplicationSubnetGroupArguments {
  id?: string
  replication_subnet_group_description: string
  replication_subnet_group_id: string
  subnet_ids: Set<string>
  tags?: {[key: string]: string}
}

export interface DmsReplicationSubnetGroupAttributes {
  id: string
  replication_subnet_group_arn: string
  replication_subnet_group_description: string
  replication_subnet_group_id: string
  subnet_ids: Set<string>
  tags?: {[key: string]: string}
  vpc_id: string
}

export class DmsReplicationSubnetGroup extends Resource<
  DmsReplicationSubnetGroupArguments,
  DmsReplicationSubnetGroupAttributes
> {
  kind = 'aws_dms_replication_subnet_group'
  _outputAttrNames = [
    'id',
    'replication_subnet_group_arn',
    'replication_subnet_group_description',
    'replication_subnet_group_id',
    'subnet_ids',
    'tags',
    'vpc_id',
  ] as const
}
