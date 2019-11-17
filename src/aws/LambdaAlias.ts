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
  kind = 'aws_lambda_alias'
  _outputAttrNames = ['arn', 'description', 'function_name', 'function_version', 'id', 'invoke_arn', 'name'] as const
}
