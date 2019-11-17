import {Resource} from '../Resource'

export interface LambdaFunctionArguments {
  description?: string
  filename?: string
  function_name: string
  handler: string
  id?: string
  kms_key_arn?: string
  layers?: Array<string>
  memory_size?: number
  publish?: boolean
  reserved_concurrent_executions?: number
  role: string
  runtime: string
  s3_bucket?: string
  s3_key?: string
  s3_object_version?: string
  source_code_hash?: string
  tags?: {[key: string]: string}
  timeout?: number
}

export interface LambdaFunctionAttributes {
  arn: string
  description?: string
  filename?: string
  function_name: string
  handler: string
  id: string
  invoke_arn: string
  kms_key_arn?: string
  last_modified: string
  layers?: Array<string>
  memory_size?: number
  publish?: boolean
  qualified_arn: string
  reserved_concurrent_executions?: number
  role: string
  runtime: string
  s3_bucket?: string
  s3_key?: string
  s3_object_version?: string
  source_code_hash: string
  source_code_size: number
  tags?: {[key: string]: string}
  timeout?: number
  version: string
}

export class LambdaFunction extends Resource<LambdaFunctionArguments, LambdaFunctionAttributes> {
  kind = 'aws_lambda_function'
  _outputAttrNames = [
    'arn',
    'description',
    'filename',
    'function_name',
    'handler',
    'id',
    'invoke_arn',
    'kms_key_arn',
    'last_modified',
    'layers',
    'memory_size',
    'publish',
    'qualified_arn',
    'reserved_concurrent_executions',
    'role',
    'runtime',
    's3_bucket',
    's3_key',
    's3_object_version',
    'source_code_hash',
    'source_code_size',
    'tags',
    'timeout',
    'version',
  ] as const
}
