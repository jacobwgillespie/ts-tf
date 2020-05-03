import {Resource} from '../Resource'

export interface CloudfrontOriginAccessIdentityArguments {
  comment?: string
  id?: string
}

export interface CloudfrontOriginAccessIdentityAttributes {
  caller_reference: string
  cloudfront_access_identity_path: string
  comment?: string
  etag: string
  iam_arn: string
  id: string
  s3_canonical_user_id: string
}

export class CloudfrontOriginAccessIdentity extends Resource<
  CloudfrontOriginAccessIdentityArguments,
  CloudfrontOriginAccessIdentityAttributes
> {
  _kind = 'aws_cloudfront_origin_access_identity'

  get caller_reference() {
    return this._attr('caller_reference')
  }

  get cloudfront_access_identity_path() {
    return this._attr('cloudfront_access_identity_path')
  }

  get comment() {
    return this._attr('comment')
  }

  get etag() {
    return this._attr('etag')
  }

  get iam_arn() {
    return this._attr('iam_arn')
  }

  get id() {
    return this._attr('id')
  }

  get s3_canonical_user_id() {
    return this._attr('s3_canonical_user_id')
  }
}
