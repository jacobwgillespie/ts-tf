import {Resource} from '../Resource'

export interface SesDomainIdentityArguments {
  domain: string
  id?: string
}

export interface SesDomainIdentityAttributes {
  arn: string
  domain: string
  id: string
  verification_token: string
}

export class SesDomainIdentity extends Resource<SesDomainIdentityArguments, SesDomainIdentityAttributes> {
  _kind = 'aws_ses_domain_identity'

  get arn() {
    return this._attr('arn')
  }

  get domain() {
    return this._attr('domain')
  }

  get id() {
    return this._attr('id')
  }

  get verification_token() {
    return this._attr('verification_token')
  }
}
