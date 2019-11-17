import {Resource} from '../Resource'

export interface ConfigAggregateAuthorizationArguments {
  account_id: string
  id?: string
  region: string
  tags?: {[key: string]: string}
}

export interface ConfigAggregateAuthorizationAttributes {
  account_id: string
  arn: string
  id: string
  region: string
  tags?: {[key: string]: string}
}

export class ConfigAggregateAuthorization extends Resource<
  ConfigAggregateAuthorizationArguments,
  ConfigAggregateAuthorizationAttributes
> {
  kind = 'aws_config_aggregate_authorization'
  _outputAttrNames = ['account_id', 'arn', 'id', 'region', 'tags'] as const
}
