import {Resource} from '../Resource'

export interface ConfigConfigurationRecorderStatusArguments {
  id?: string
  is_enabled: boolean
  name: string
}

export interface ConfigConfigurationRecorderStatusAttributes {
  id: string
  is_enabled: boolean
  name: string
}

export class ConfigConfigurationRecorderStatus extends Resource<
  ConfigConfigurationRecorderStatusArguments,
  ConfigConfigurationRecorderStatusAttributes
> {
  _kind = 'aws_config_configuration_recorder_status'

  get id() {
    return this._attr('id')
  }

  get is_enabled() {
    return this._attr('is_enabled')
  }

  get name() {
    return this._attr('name')
  }
}
