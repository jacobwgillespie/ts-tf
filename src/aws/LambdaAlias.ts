import {Resource} from '../Resource'

export interface LambdaAliasArguments {
  description?: string
  function_name: string
  function_version: string
  id?: string
  name: string
}

export interface LambdaAliasAttributes {
  arn: string
  description?: string
  function_name: string
  function_version: string
  id: string
  invoke_arn: string
  name: string
}

export class LambdaAlias extends Resource<LambdaAliasArguments, LambdaAliasAttributes> {
  _kind = 'aws_lambda_alias'

  get arn() {
    return this._attr('arn')
  }

  get description() {
    return this._attr('description')
  }

  get function_name() {
    return this._attr('function_name')
  }

  get function_version() {
    return this._attr('function_version')
  }

  get id() {
    return this._attr('id')
  }

  get invoke_arn() {
    return this._attr('invoke_arn')
  }

  get name() {
    return this._attr('name')
  }
}
