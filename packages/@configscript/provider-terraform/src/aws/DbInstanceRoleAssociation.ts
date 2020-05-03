import {Resource} from '../Resource'

export interface DbInstanceRoleAssociationArguments {
  db_instance_identifier: string
  feature_name: string
  id?: string
  role_arn: string
}

export interface DbInstanceRoleAssociationAttributes {
  db_instance_identifier: string
  feature_name: string
  id: string
  role_arn: string
}

export class DbInstanceRoleAssociation extends Resource<
  DbInstanceRoleAssociationArguments,
  DbInstanceRoleAssociationAttributes
> {
  _kind = 'aws_db_instance_role_association'

  get db_instance_identifier() {
    return this._attr('db_instance_identifier')
  }

  get feature_name() {
    return this._attr('feature_name')
  }

  get id() {
    return this._attr('id')
  }

  get role_arn() {
    return this._attr('role_arn')
  }
}
