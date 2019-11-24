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
  _kind = 'aws_opsworks_rds_db_instance'

  get db_password() {
    return this._attr('db_password')
  }

  get db_user() {
    return this._attr('db_user')
  }

  get id() {
    return this._attr('id')
  }

  get rds_db_instance_arn() {
    return this._attr('rds_db_instance_arn')
  }

  get stack_id() {
    return this._attr('stack_id')
  }
}
