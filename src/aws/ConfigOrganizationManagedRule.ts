import {Resource} from '../Resource'

export interface ConfigOrganizationManagedRuleArguments {
  description?: string
  excluded_accounts?: Set<string>
  id?: string
  input_parameters?: string
  maximum_execution_frequency?: string
  name: string
  resource_id_scope?: string
  resource_types_scope?: Set<string>
  rule_identifier: string
  tag_key_scope?: string
  tag_value_scope?: string
}

export interface ConfigOrganizationManagedRuleAttributes {
  arn: string
  description?: string
  excluded_accounts?: Set<string>
  id: string
  input_parameters?: string
  maximum_execution_frequency?: string
  name: string
  resource_id_scope?: string
  resource_types_scope?: Set<string>
  rule_identifier: string
  tag_key_scope?: string
  tag_value_scope?: string
}

export class ConfigOrganizationManagedRule extends Resource<
  ConfigOrganizationManagedRuleArguments,
  ConfigOrganizationManagedRuleAttributes
> {
  kind = 'aws_config_organization_managed_rule'
  _outputAttrNames = [
    'arn',
    'description',
    'excluded_accounts',
    'id',
    'input_parameters',
    'maximum_execution_frequency',
    'name',
    'resource_id_scope',
    'resource_types_scope',
    'rule_identifier',
    'tag_key_scope',
    'tag_value_scope',
  ] as const
}
