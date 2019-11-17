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
  kind = 'aws_emr_security_configuration'
  _outputAttrNames = ['configuration', 'creation_date', 'id', 'name', 'name_prefix'] as const
}
