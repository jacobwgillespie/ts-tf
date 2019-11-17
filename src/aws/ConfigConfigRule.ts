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
  kind = 'aws_config_config_rule'
  _outputAttrNames = [
    'arn',
    'description',
    'id',
    'input_parameters',
    'maximum_execution_frequency',
    'name',
    'rule_id',
    'tags',
  ] as const
}
