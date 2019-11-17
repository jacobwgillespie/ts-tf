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
  kind = 'aws_ses_domain_identity'
  _outputAttrNames = ['arn', 'domain', 'id', 'verification_token'] as const
}
