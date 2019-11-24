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
  _kind = 'aws_media_store_container'

  get arn() {
    return this._attr('arn')
  }

  get endpoint() {
    return this._attr('endpoint')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get tags() {
    return this._attr('tags')
  }
}
