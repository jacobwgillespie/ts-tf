import {Resource} from '../Resource'

export interface EmrSecurityConfigurationArguments {
  configuration: string
  id?: string
  name?: string
  name_prefix?: string
}

export interface EmrSecurityConfigurationAttributes {
  configuration: string
  creation_date: string
  id: string
  name: string
  name_prefix?: string
}

export class EmrSecurityConfiguration extends Resource<
  EmrSecurityConfigurationArguments,
  EmrSecurityConfigurationAttributes
> {
  _kind = 'aws_emr_security_configuration'

  get configuration() {
    return this._attr('configuration')
  }

  get creation_date() {
    return this._attr('creation_date')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get name_prefix() {
    return this._attr('name_prefix')
  }
}
