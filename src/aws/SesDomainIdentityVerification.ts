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
  kind = 'aws_ses_domain_identity_verification'
  _outputAttrNames = ['arn', 'domain', 'id'] as const
}
