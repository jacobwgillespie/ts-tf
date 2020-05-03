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
  _kind = 'aws_dms_replication_subnet_group'

  get id() {
    return this._attr('id')
  }

  get replication_subnet_group_arn() {
    return this._attr('replication_subnet_group_arn')
  }

  get replication_subnet_group_description() {
    return this._attr('replication_subnet_group_description')
  }

  get replication_subnet_group_id() {
    return this._attr('replication_subnet_group_id')
  }

  get subnet_ids() {
    return this._attr('subnet_ids')
  }

  get tags() {
    return this._attr('tags')
  }

  get vpc_id() {
    return this._attr('vpc_id')
  }
}
