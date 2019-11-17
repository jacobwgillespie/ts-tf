import {Resource} from '../Resource'

export interface DbSecurityGroupArguments {
  description?: string
  id?: string
  name: string
  tags?: {[key: string]: string}
}

export interface DbSecurityGroupAttributes {
  arn: string
  description?: string
  id: string
  name: string
  tags?: {[key: string]: string}
}

export class DbSecurityGroup extends Resource<DbSecurityGroupArguments, DbSecurityGroupAttributes> {
  kind = 'aws_db_security_group'
  _outputAttrNames = ['arn', 'description', 'id', 'name', 'tags'] as const
}
