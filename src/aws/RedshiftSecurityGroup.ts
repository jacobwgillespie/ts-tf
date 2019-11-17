import {Resource} from '../Resource'

export interface RedshiftSecurityGroupArguments {
  description?: string
  id?: string
  name: string
}

export interface RedshiftSecurityGroupAttributes {
  description?: string
  id: string
  name: string
}

export class RedshiftSecurityGroup extends Resource<RedshiftSecurityGroupArguments, RedshiftSecurityGroupAttributes> {
  kind = 'aws_redshift_security_group'
  _outputAttrNames = ['description', 'id', 'name'] as const
}
