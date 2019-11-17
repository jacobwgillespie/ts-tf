import {Resource} from '../Resource'

export interface CognitoUserPoolDomainArguments {
  certificate_arn?: string
  domain: string
  id?: string
  user_pool_id: string
}

export interface CognitoUserPoolDomainAttributes {
  aws_account_id: string
  certificate_arn?: string
  cloudfront_distribution_arn: string
  domain: string
  id: string
  s3_bucket: string
  user_pool_id: string
  version: string
}

export class CognitoUserPoolDomain extends Resource<CognitoUserPoolDomainArguments, CognitoUserPoolDomainAttributes> {
  kind = 'aws_cognito_user_pool_domain'
  _outputAttrNames = [
    'aws_account_id',
    'certificate_arn',
    'cloudfront_distribution_arn',
    'domain',
    'id',
    's3_bucket',
    'user_pool_id',
    'version',
  ] as const
}
