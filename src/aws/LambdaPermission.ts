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
  kind = 'aws_lambda_permission'
  _outputAttrNames = [
    'action',
    'event_source_token',
    'function_name',
    'id',
    'principal',
    'qualifier',
    'source_account',
    'source_arn',
    'statement_id',
    'statement_id_prefix',
  ] as const
}
