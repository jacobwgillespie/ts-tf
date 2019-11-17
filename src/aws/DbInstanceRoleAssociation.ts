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
  kind = 'aws_db_instance_role_association'
  _outputAttrNames = ['db_instance_identifier', 'feature_name', 'id', 'role_arn'] as const
}
