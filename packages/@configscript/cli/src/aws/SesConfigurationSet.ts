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
  _kind = 'aws_ses_configuration_set'

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }
}
