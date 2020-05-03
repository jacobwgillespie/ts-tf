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
  _kind = 'aws_elastictranscoder_preset'

  get arn() {
    return this._attr('arn')
  }

  get container() {
    return this._attr('container')
  }

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get type() {
    return this._attr('type')
  }

  get video_codec_options() {
    return this._attr('video_codec_options')
  }
}
