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
  kind = 'aws_rds_global_cluster'
  _outputAttrNames = [
    'arn',
    'database_name',
    'deletion_protection',
    'engine',
    'engine_version',
    'global_cluster_identifier',
    'global_cluster_resource_id',
    'id',
    'storage_encrypted',
  ] as const
}
