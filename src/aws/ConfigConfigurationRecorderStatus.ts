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
  kind = 'aws_config_configuration_recorder_status'
  _outputAttrNames = ['id', 'is_enabled', 'name'] as const
}
