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
  _kind = 'aws_config_organization_managed_rule'

  get arn() {
    return this._attr('arn')
  }

  get description() {
    return this._attr('description')
  }

  get excluded_accounts() {
    return this._attr('excluded_accounts')
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

  get resource_id_scope() {
    return this._attr('resource_id_scope')
  }

  get resource_types_scope() {
    return this._attr('resource_types_scope')
  }

  get rule_identifier() {
    return this._attr('rule_identifier')
  }

  get tag_key_scope() {
    return this._attr('tag_key_scope')
  }

  get tag_value_scope() {
    return this._attr('tag_value_scope')
  }
}
