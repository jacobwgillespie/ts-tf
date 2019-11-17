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
  kind = 'aws_lambda_layer_version'
  _outputAttrNames = [
    'arn',
    'compatible_runtimes',
    'created_date',
    'description',
    'filename',
    'id',
    'layer_arn',
    'layer_name',
    'license_info',
    's3_bucket',
    's3_key',
    's3_object_version',
    'source_code_hash',
    'source_code_size',
    'version',
  ] as const
}
