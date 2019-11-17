import {Resource} from '../Resource'

export interface DmsReplicationTaskArguments {
  cdc_start_time?: string
  id?: string
  migration_type: string
  replication_instance_arn: string
  replication_task_id: string
  replication_task_settings?: string
  source_endpoint_arn: string
  table_mappings: string
  tags?: {[key: string]: string}
  target_endpoint_arn: string
}

export interface DmsReplicationTaskAttributes {
  cdc_start_time?: string
  id: string
  migration_type: string
  replication_instance_arn: string
  replication_task_arn: string
  replication_task_id: string
  replication_task_settings?: string
  source_endpoint_arn: string
  table_mappings: string
  tags?: {[key: string]: string}
  target_endpoint_arn: string
}

export class DmsReplicationTask extends Resource<DmsReplicationTaskArguments, DmsReplicationTaskAttributes> {
  kind = 'aws_dms_replication_task'
  _outputAttrNames = [
    'cdc_start_time',
    'id',
    'migration_type',
    'replication_instance_arn',
    'replication_task_arn',
    'replication_task_id',
    'replication_task_settings',
    'source_endpoint_arn',
    'table_mappings',
    'tags',
    'target_endpoint_arn',
  ] as const
}
