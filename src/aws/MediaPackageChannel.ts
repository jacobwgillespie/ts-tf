import {Resource} from '../Resource'

export interface MediaPackageChannelArguments {
  channel_id: string
  description?: string
  id?: string
  tags?: {[key: string]: string}
}

export interface MediaPackageChannelAttributes {
  arn: string
  channel_id: string
  description?: string
  hls_ingest: Array<{ingest_endpoints: Array<{password: string; url: string; username: string}>}>
  id: string
  tags?: {[key: string]: string}
}

export class MediaPackageChannel extends Resource<MediaPackageChannelArguments, MediaPackageChannelAttributes> {
  _kind = 'aws_media_package_channel'

  get arn() {
    return this._attr('arn')
  }

  get channel_id() {
    return this._attr('channel_id')
  }

  get description() {
    return this._attr('description')
  }

  get hls_ingest() {
    return this._attr('hls_ingest')
  }

  get id() {
    return this._attr('id')
  }

  get tags() {
    return this._attr('tags')
  }
}
