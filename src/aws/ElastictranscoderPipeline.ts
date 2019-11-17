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
  kind = 'aws_elastictranscoder_pipeline'
  _outputAttrNames = ['arn', 'aws_kms_key_arn', 'id', 'input_bucket', 'name', 'output_bucket', 'role'] as const
}
