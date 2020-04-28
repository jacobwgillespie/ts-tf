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
  _kind = 'aws_config_configuration_aggregator'

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get tags() {
    return this._attr('tags')
  }
}
