import {Resource} from '../Resource'

export interface MediaStoreContainerArguments {
  id?: string
  name: string
  tags?: {[key: string]: string}
}

export interface MediaStoreContainerAttributes {
  arn: string
  endpoint: string
  id: string
  name: string
  tags?: {[key: string]: string}
}

export class MediaStoreContainer extends Resource<MediaStoreContainerArguments, MediaStoreContainerAttributes> {
  kind = 'aws_media_store_container'
  _outputAttrNames = ['arn', 'endpoint', 'id', 'name', 'tags'] as const
}
