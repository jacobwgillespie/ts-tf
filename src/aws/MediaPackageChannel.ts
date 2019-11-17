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
  kind = 'aws_media_package_channel'
  _outputAttrNames = ['arn', 'channel_id', 'description', 'hls_ingest', 'id', 'tags'] as const
}
