import {Resource} from '../Resource'

export interface OrganizationsOrganizationArguments {
  aws_service_access_principals?: Set<string>
  enabled_policy_types?: Set<string>
  feature_set?: string
  id?: string
}

export interface OrganizationsOrganizationAttributes {
  accounts: Array<{arn: string; email: string; id: string; name: string}>
  arn: string
  aws_service_access_principals?: Set<string>
  enabled_policy_types?: Set<string>
  feature_set?: string
  id: string
  master_account_arn: string
  master_account_email: string
  master_account_id: string
  non_master_accounts: Array<{arn: string; email: string; id: string; name: string}>
  roots: Array<{arn: string; id: string; name: string; policy_types: Array<{status: string; type: string}>}>
}

export class OrganizationsOrganization extends Resource<
  OrganizationsOrganizationArguments,
  OrganizationsOrganizationAttributes
> {
  _kind = 'aws_organizations_organization'

  get accounts() {
    return this._attr('accounts')
  }

  get arn() {
    return this._attr('arn')
  }

  get aws_service_access_principals() {
    return this._attr('aws_service_access_principals')
  }

  get enabled_policy_types() {
    return this._attr('enabled_policy_types')
  }

  get feature_set() {
    return this._attr('feature_set')
  }

  get id() {
    return this._attr('id')
  }

  get master_account_arn() {
    return this._attr('master_account_arn')
  }

  get master_account_email() {
    return this._attr('master_account_email')
  }

  get master_account_id() {
    return this._attr('master_account_id')
  }

  get non_master_accounts() {
    return this._attr('non_master_accounts')
  }

  get roots() {
    return this._attr('roots')
  }
}
