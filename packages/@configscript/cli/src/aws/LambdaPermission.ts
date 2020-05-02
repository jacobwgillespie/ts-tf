import {Resource} from '../Resource'

export interface LambdaPermissionArguments {
  action: string
  event_source_token?: string
  function_name: string
  id?: string
  principal: string
  qualifier?: string
  source_account?: string
  source_arn?: string
  statement_id?: string
  statement_id_prefix?: string
}

export interface LambdaPermissionAttributes {
  action: string
  event_source_token?: string
  function_name: string
  id: string
  principal: string
  qualifier?: string
  source_account?: string
  source_arn?: string
  statement_id: string
  statement_id_prefix?: string
}

export class LambdaPermission extends Resource<LambdaPermissionArguments, LambdaPermissionAttributes> {
  _kind = 'aws_lambda_permission'

  get action() {
    return this._attr('action')
  }

  get event_source_token() {
    return this._attr('event_source_token')
  }

  get function_name() {
    return this._attr('function_name')
  }

  get id() {
    return this._attr('id')
  }

  get principal() {
    return this._attr('principal')
  }

  get qualifier() {
    return this._attr('qualifier')
  }

  get source_account() {
    return this._attr('source_account')
  }

  get source_arn() {
    return this._attr('source_arn')
  }

  get statement_id() {
    return this._attr('statement_id')
  }

  get statement_id_prefix() {
    return this._attr('statement_id_prefix')
  }
}
