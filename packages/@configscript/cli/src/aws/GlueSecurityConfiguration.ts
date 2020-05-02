import {Resource} from '../Resource'

export interface GlueSecurityConfigurationArguments {
  id?: string
  name: string
}

export interface GlueSecurityConfigurationAttributes {
  id: string
  name: string
}

export class GlueSecurityConfiguration extends Resource<
  GlueSecurityConfigurationArguments,
  GlueSecurityConfigurationAttributes
> {
  _kind = 'aws_glue_security_configuration'

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }
}
