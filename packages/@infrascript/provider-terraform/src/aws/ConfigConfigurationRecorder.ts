import {Resource} from '../Resource'

export interface ConfigConfigurationRecorderArguments {
  id?: string
  name?: string
  role_arn: string
}

export interface ConfigConfigurationRecorderAttributes {
  id: string
  name?: string
  role_arn: string
}

export class ConfigConfigurationRecorder extends Resource<
  ConfigConfigurationRecorderArguments,
  ConfigConfigurationRecorderAttributes
> {
  _kind = 'aws_config_configuration_recorder'

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get role_arn() {
    return this._attr('role_arn')
  }
}
