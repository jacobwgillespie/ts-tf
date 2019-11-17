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
  kind = 'aws_cloudfront_origin_access_identity'
  _outputAttrNames = [
    'caller_reference',
    'cloudfront_access_identity_path',
    'comment',
    'etag',
    'iam_arn',
    'id',
    's3_canonical_user_id',
  ] as const
}
