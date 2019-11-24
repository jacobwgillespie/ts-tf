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
  _kind = 'aws_config_aggregate_authorization'

  get account_id() {
    return this._attr('account_id')
  }

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get region() {
    return this._attr('region')
  }

  get tags() {
    return this._attr('tags')
  }
}
