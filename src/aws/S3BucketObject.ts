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
  kind = 'aws_s3_bucket_object'
  _outputAttrNames = [
    'acl',
    'bucket',
    'cache_control',
    'content',
    'content_base64',
    'content_disposition',
    'content_encoding',
    'content_language',
    'content_type',
    'etag',
    'id',
    'key',
    'kms_key_id',
    'metadata',
    'server_side_encryption',
    'source',
    'storage_class',
    'tags',
    'version_id',
    'website_redirect',
  ] as const
}
