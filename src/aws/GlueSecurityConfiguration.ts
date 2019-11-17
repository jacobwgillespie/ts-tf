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
  kind = 'aws_glue_security_configuration'
  _outputAttrNames = ['id', 'name'] as const
}
