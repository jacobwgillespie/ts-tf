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
  _kind = 'aws_dms_replication_task'

  get cdc_start_time() {
    return this._attr('cdc_start_time')
  }

  get id() {
    return this._attr('id')
  }

  get migration_type() {
    return this._attr('migration_type')
  }

  get replication_instance_arn() {
    return this._attr('replication_instance_arn')
  }

  get replication_task_arn() {
    return this._attr('replication_task_arn')
  }

  get replication_task_id() {
    return this._attr('replication_task_id')
  }

  get replication_task_settings() {
    return this._attr('replication_task_settings')
  }

  get source_endpoint_arn() {
    return this._attr('source_endpoint_arn')
  }

  get table_mappings() {
    return this._attr('table_mappings')
  }

  get tags() {
    return this._attr('tags')
  }

  get target_endpoint_arn() {
    return this._attr('target_endpoint_arn')
  }
}
