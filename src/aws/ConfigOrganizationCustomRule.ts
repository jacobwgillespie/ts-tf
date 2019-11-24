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
  _kind = 'aws_config_organization_custom_rule'

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

  get lambda_function_arn() {
    return this._attr('lambda_function_arn')
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

  get tag_key_scope() {
    return this._attr('tag_key_scope')
  }

  get tag_value_scope() {
    return this._attr('tag_value_scope')
  }

  get trigger_types() {
    return this._attr('trigger_types')
  }
}
