import {Resource} from '../Resource'

export interface SesDomainIdentityVerificationArguments {
  domain: string
  id?: string
}

export interface SesDomainIdentityVerificationAttributes {
  arn: string
  domain: string
  id: string
}

export class SesDomainIdentityVerification extends Resource<
  SesDomainIdentityVerificationArguments,
  SesDomainIdentityVerificationAttributes
> {
  _kind = 'aws_ses_domain_identity_verification'

  get arn() {
    return this._attr('arn')
  }

  get domain() {
    return this._attr('domain')
  }

  get id() {
    return this._attr('id')
  }
}
