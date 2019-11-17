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
  kind = 'aws_cloudfront_public_key'
  _outputAttrNames = ['caller_reference', 'comment', 'encoded_key', 'etag', 'id', 'name', 'name_prefix'] as const
}
