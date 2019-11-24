import {Resource} from '../Resource'

export interface S3BucketObjectArguments {
  acl?: string
  bucket: string
  cache_control?: string
  content?: string
  content_base64?: string
  content_disposition?: string
  content_encoding?: string
  content_language?: string
  content_type?: string
  etag?: string
  id?: string
  key: string
  kms_key_id?: string
  metadata?: {[key: string]: string}
  server_side_encryption?: string
  source?: string
  storage_class?: string
  tags?: {[key: string]: string}
  website_redirect?: string
}

export interface S3BucketObjectAttributes {
  acl?: string
  bucket: string
  cache_control?: string
  content?: string
  content_base64?: string
  content_disposition?: string
  content_encoding?: string
  content_language?: string
  content_type: string
  etag: string
  id: string
  key: string
  kms_key_id?: string
  metadata?: {[key: string]: string}
  server_side_encryption: string
  source?: string
  storage_class: string
  tags?: {[key: string]: string}
  version_id: string
  website_redirect?: string
}

export class S3BucketObject extends Resource<S3BucketObjectArguments, S3BucketObjectAttributes> {
  _kind = 'aws_s3_bucket_object'

  get acl() {
    return this._attr('acl')
  }

  get bucket() {
    return this._attr('bucket')
  }

  get cache_control() {
    return this._attr('cache_control')
  }

  get content() {
    return this._attr('content')
  }

  get content_base64() {
    return this._attr('content_base64')
  }

  get content_disposition() {
    return this._attr('content_disposition')
  }

  get content_encoding() {
    return this._attr('content_encoding')
  }

  get content_language() {
    return this._attr('content_language')
  }

  get content_type() {
    return this._attr('content_type')
  }

  get etag() {
    return this._attr('etag')
  }

  get id() {
    return this._attr('id')
  }

  get key() {
    return this._attr('key')
  }

  get kms_key_id() {
    return this._attr('kms_key_id')
  }

  get metadata() {
    return this._attr('metadata')
  }

  get server_side_encryption() {
    return this._attr('server_side_encryption')
  }

  get source() {
    return this._attr('source')
  }

  get storage_class() {
    return this._attr('storage_class')
  }

  get tags() {
    return this._attr('tags')
  }

  get version_id() {
    return this._attr('version_id')
  }

  get website_redirect() {
    return this._attr('website_redirect')
  }
}
