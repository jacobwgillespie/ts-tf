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
  _kind = 'aws_cognito_user_pool_domain'

  get aws_account_id() {
    return this._attr('aws_account_id')
  }

  get certificate_arn() {
    return this._attr('certificate_arn')
  }

  get cloudfront_distribution_arn() {
    return this._attr('cloudfront_distribution_arn')
  }

  get domain() {
    return this._attr('domain')
  }

  get id() {
    return this._attr('id')
  }

  get s3_bucket() {
    return this._attr('s3_bucket')
  }

  get user_pool_id() {
    return this._attr('user_pool_id')
  }

  get version() {
    return this._attr('version')
  }
}
