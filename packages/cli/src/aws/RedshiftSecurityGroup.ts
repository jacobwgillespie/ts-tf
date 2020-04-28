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
  _kind = 'aws_redshift_security_group'

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }
}
