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
  kind = 'aws_config_configuration_recorder'
  _outputAttrNames = ['id', 'name', 'role_arn'] as const
}
