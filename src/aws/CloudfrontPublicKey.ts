import {Resource} from '../Resource'

export interface CloudfrontPublicKeyArguments {
  comment?: string
  encoded_key: string
  id?: string
  name?: string
  name_prefix?: string
}

export interface CloudfrontPublicKeyAttributes {
  caller_reference: string
  comment?: string
  encoded_key: string
  etag: string
  id: string
  name: string
  name_prefix: string
}

export class CloudfrontPublicKey extends Resource<CloudfrontPublicKeyArguments, CloudfrontPublicKeyAttributes> {
  _kind = 'aws_cloudfront_public_key'

  get caller_reference() {
    return this._attr('caller_reference')
  }

  get comment() {
    return this._attr('comment')
  }

  get encoded_key() {
    return this._attr('encoded_key')
  }

  get etag() {
    return this._attr('etag')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get name_prefix() {
    return this._attr('name_prefix')
  }
}
