import {Resource} from '../Resource'

export interface RdsGlobalClusterArguments {
  database_name?: string
  deletion_protection?: boolean
  engine?: string
  engine_version?: string
  global_cluster_identifier: string
  id?: string
  storage_encrypted?: boolean
}

export interface RdsGlobalClusterAttributes {
  arn: string
  database_name?: string
  deletion_protection?: boolean
  engine?: string
  engine_version: string
  global_cluster_identifier: string
  global_cluster_resource_id: string
  id: string
  storage_encrypted?: boolean
}

export class RdsGlobalCluster extends Resource<RdsGlobalClusterArguments, RdsGlobalClusterAttributes> {
  _kind = 'aws_rds_global_cluster'

  get arn() {
    return this._attr('arn')
  }

  get database_name() {
    return this._attr('database_name')
  }

  get deletion_protection() {
    return this._attr('deletion_protection')
  }

  get engine() {
    return this._attr('engine')
  }

  get engine_version() {
    return this._attr('engine_version')
  }

  get global_cluster_identifier() {
    return this._attr('global_cluster_identifier')
  }

  get global_cluster_resource_id() {
    return this._attr('global_cluster_resource_id')
  }

  get id() {
    return this._attr('id')
  }

  get storage_encrypted() {
    return this._attr('storage_encrypted')
  }
}
