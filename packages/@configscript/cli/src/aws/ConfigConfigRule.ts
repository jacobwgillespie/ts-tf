import {Resource} from '../Resource'

export interface ConfigConfigRuleArguments {
  description?: string
  id?: string
  input_parameters?: string
  maximum_execution_frequency?: string
  name: string
  tags?: {[key: string]: string}
}

export interface ConfigConfigRuleAttributes {
  arn: string
  description?: string
  id: string
  input_parameters?: string
  maximum_execution_frequency?: string
  name: string
  rule_id: string
  tags?: {[key: string]: string}
}

export class ConfigConfigRule extends Resource<ConfigConfigRuleArguments, ConfigConfigRuleAttributes> {
  _kind = 'aws_config_config_rule'

  get arn() {
    return this._attr('arn')
  }

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get input_parameters() {
    return this._attr('input_parameters')
  }

  get maximum_execution_frequency() {
    return this._attr('maximum_execution_frequency')
  }

  get name() {
    return this._attr('name')
  }

  get rule_id() {
    return this._attr('rule_id')
  }

  get tags() {
    return this._attr('tags')
  }
}
