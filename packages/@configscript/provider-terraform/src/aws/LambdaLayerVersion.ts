import {Resource} from '../Resource'

export interface LambdaLayerVersionArguments {
  compatible_runtimes?: Set<string>
  description?: string
  filename?: string
  id?: string
  layer_name: string
  license_info?: string
  s3_bucket?: string
  s3_key?: string
  s3_object_version?: string
  source_code_hash?: string
}

export interface LambdaLayerVersionAttributes {
  arn: string
  compatible_runtimes?: Set<string>
  created_date: string
  description?: string
  filename?: string
  id: string
  layer_arn: string
  layer_name: string
  license_info?: string
  s3_bucket?: string
  s3_key?: string
  s3_object_version?: string
  source_code_hash: string
  source_code_size: number
  version: string
}

export class LambdaLayerVersion extends Resource<LambdaLayerVersionArguments, LambdaLayerVersionAttributes> {
  _kind = 'aws_lambda_layer_version'

  get arn() {
    return this._attr('arn')
  }

  get compatible_runtimes() {
    return this._attr('compatible_runtimes')
  }

  get created_date() {
    return this._attr('created_date')
  }

  get description() {
    return this._attr('description')
  }

  get filename() {
    return this._attr('filename')
  }

  get id() {
    return this._attr('id')
  }

  get layer_arn() {
    return this._attr('layer_arn')
  }

  get layer_name() {
    return this._attr('layer_name')
  }

  get license_info() {
    return this._attr('license_info')
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

  get version() {
    return this._attr('version')
  }
}
