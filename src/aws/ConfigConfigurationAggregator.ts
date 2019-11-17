import {Resource} from '../Resource'

export interface ConfigConfigurationAggregatorArguments {
  id?: string
  name: string
  tags?: {[key: string]: string}
}

export interface ConfigConfigurationAggregatorAttributes {
  arn: string
  id: string
  name: string
  tags?: {[key: string]: string}
}

export class ConfigConfigurationAggregator extends Resource<
  ConfigConfigurationAggregatorArguments,
  ConfigConfigurationAggregatorAttributes
> {
  kind = 'aws_config_configuration_aggregator'
  _outputAttrNames = ['arn', 'id', 'name', 'tags'] as const
}
