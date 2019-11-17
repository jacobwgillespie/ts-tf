import {Resource} from '../Resource'

export interface SesConfigurationSetArguments {
  id?: string
  name: string
}

export interface SesConfigurationSetAttributes {
  id: string
  name: string
}

export class SesConfigurationSet extends Resource<SesConfigurationSetArguments, SesConfigurationSetAttributes> {
  kind = 'aws_ses_configuration_set'
  _outputAttrNames = ['id', 'name'] as const
}
