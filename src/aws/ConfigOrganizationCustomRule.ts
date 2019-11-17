import {Resource} from '../Resource'

export interface ConfigOrganizationCustomRuleArguments {
  description?: string
  excluded_accounts?: Set<string>
  id?: string
  input_parameters?: string
  lambda_function_arn: string
  maximum_execution_frequency?: string
  name: string
  resource_id_scope?: string
  resource_types_scope?: Set<string>
  tag_key_scope?: string
  tag_value_scope?: string
  trigger_types: Set<string>
}

export interface ConfigOrganizationCustomRuleAttributes {
  arn: string
  description?: string
  excluded_accounts?: Set<string>
  id: string
  input_parameters?: string
  lambda_function_arn: string
  maximum_execution_frequency?: string
  name: string
  resource_id_scope?: string
  resource_types_scope?: Set<string>
  tag_key_scope?: string
  tag_value_scope?: string
  trigger_types: Set<string>
}

export class ConfigOrganizationCustomRule extends Resource<
  ConfigOrganizationCustomRuleArguments,
  ConfigOrganizationCustomRuleAttributes
> {
  kind = 'aws_config_organization_custom_rule'
  _outputAttrNames = [
    'arn',
    'description',
    'excluded_accounts',
    'id',
    'input_parameters',
    'lambda_function_arn',
    'maximum_execution_frequency',
    'name',
    'resource_id_scope',
    'resource_types_scope',
    'tag_key_scope',
    'tag_value_scope',
    'trigger_types',
  ] as const
}
