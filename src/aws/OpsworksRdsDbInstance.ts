import {Resource} from '../Resource'

export interface OpsworksRdsDbInstanceArguments {
  db_password: string
  db_user: string
  id?: string
  rds_db_instance_arn: string
  stack_id: string
}

export interface OpsworksRdsDbInstanceAttributes {
  db_password: string
  db_user: string
  id: string
  rds_db_instance_arn: string
  stack_id: string
}

export class OpsworksRdsDbInstance extends Resource<OpsworksRdsDbInstanceArguments, OpsworksRdsDbInstanceAttributes> {
  kind = 'aws_opsworks_rds_db_instance'
  _outputAttrNames = ['db_password', 'db_user', 'id', 'rds_db_instance_arn', 'stack_id'] as const
}
