import {Resource} from '../Resource'

export interface ElastictranscoderPipelineArguments {
  aws_kms_key_arn?: string
  id?: string
  input_bucket: string
  name?: string
  output_bucket?: string
  role: string
}

export interface ElastictranscoderPipelineAttributes {
  arn: string
  aws_kms_key_arn?: string
  id: string
  input_bucket: string
  name: string
  output_bucket: string
  role: string
}

export class ElastictranscoderPipeline extends Resource<
  ElastictranscoderPipelineArguments,
  ElastictranscoderPipelineAttributes
> {
  _kind = 'aws_elastictranscoder_pipeline'

  get arn() {
    return this._attr('arn')
  }

  get aws_kms_key_arn() {
    return this._attr('aws_kms_key_arn')
  }

  get id() {
    return this._attr('id')
  }

  get input_bucket() {
    return this._attr('input_bucket')
  }

  get name() {
    return this._attr('name')
  }

  get output_bucket() {
    return this._attr('output_bucket')
  }

  get role() {
    return this._attr('role')
  }
}
