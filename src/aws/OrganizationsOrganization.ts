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
  kind = 'aws_organizations_organization'
  _outputAttrNames = [
    'accounts',
    'arn',
    'aws_service_access_principals',
    'enabled_policy_types',
    'feature_set',
    'id',
    'master_account_arn',
    'master_account_email',
    'master_account_id',
    'non_master_accounts',
    'roots',
  ] as const
}
