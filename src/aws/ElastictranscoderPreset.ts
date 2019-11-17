import {Resource} from '../Resource'

export interface ElastictranscoderPresetArguments {
  container: string
  description?: string
  id?: string
  name?: string
  type?: string
  video_codec_options?: {[key: string]: string}
}

export interface ElastictranscoderPresetAttributes {
  arn: string
  container: string
  description?: string
  id: string
  name: string
  type: string
  video_codec_options?: {[key: string]: string}
}

export class ElastictranscoderPreset extends Resource<
  ElastictranscoderPresetArguments,
  ElastictranscoderPresetAttributes
> {
  kind = 'aws_elastictranscoder_preset'
  _outputAttrNames = ['arn', 'container', 'description', 'id', 'name', 'type', 'video_codec_options'] as const
}
