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
  _kind = 'aws_lambda_function'

  get arn() {
    return this._attr('arn')
  }

  get description() {
    return this._attr('description')
  }

  get filename() {
    return this._attr('filename')
  }

  get function_name() {
    return this._attr('function_name')
  }

  get handler() {
    return this._attr('handler')
  }

  get id() {
    return this._attr('id')
  }

  get invoke_arn() {
    return this._attr('invoke_arn')
  }

  get kms_key_arn() {
    return this._attr('kms_key_arn')
  }

  get last_modified() {
    return this._attr('last_modified')
  }

  get layers() {
    return this._attr('layers')
  }

  get memory_size() {
    return this._attr('memory_size')
  }

  get publish() {
    return this._attr('publish')
  }

  get qualified_arn() {
    return this._attr('qualified_arn')
  }

  get reserved_concurrent_executions() {
    return this._attr('reserved_concurrent_executions')
  }

  get role() {
    return this._attr('role')
  }

  get runtime() {
    return this._attr('runtime')
  }

  get s3_bucket() {
    return this._attr('s3_bucket')
  }

  get s3_key() {
    return this._attr('s3_key')
  }

  get s3_object_version() {
    return this._attr('s3_object_version')
  }

  get source_code_hash() {
    return this._attr('source_code_hash')
  }

  get source_code_size() {
    return this._attr('source_code_size')
  }

  get tags() {
    return this._attr('tags')
  }

  get timeout() {
    return this._attr('timeout')
  }

  get version() {
    return this._attr('version')
  }
}
