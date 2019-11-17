import {Resource} from '../Resource'

export interface SesDomainDkimArguments {
  domain: string
  id?: string
}

export interface SesDomainDkimAttributes {
  dkim_tokens: Array<string>
  domain: string
  id: string
}

export class SesDomainDkim extends Resource<SesDomainDkimArguments, SesDomainDkimAttributes> {
  kind = 'aws_ses_domain_dkim'
  _outputAttrNames = ['dkim_tokens', 'domain', 'id'] as const
}
