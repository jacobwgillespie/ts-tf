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
  _kind = 'aws_ses_domain_dkim'

  get dkim_tokens() {
    return this._attr('dkim_tokens')
  }

  get domain() {
    return this._attr('domain')
  }

  get id() {
    return this._attr('id')
  }
}
