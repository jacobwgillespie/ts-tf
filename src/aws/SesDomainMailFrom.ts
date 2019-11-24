import {Resource} from '../Resource'

export interface SesDomainMailFromArguments {
  behavior_on_mx_failure?: string
  domain: string
  id?: string
  mail_from_domain: string
}

export interface SesDomainMailFromAttributes {
  behavior_on_mx_failure?: string
  domain: string
  id: string
  mail_from_domain: string
}

export class SesDomainMailFrom extends Resource<SesDomainMailFromArguments, SesDomainMailFromAttributes> {
  _kind = 'aws_ses_domain_mail_from'

  get behavior_on_mx_failure() {
    return this._attr('behavior_on_mx_failure')
  }

  get domain() {
    return this._attr('domain')
  }

  get id() {
    return this._attr('id')
  }

  get mail_from_domain() {
    return this._attr('mail_from_domain')
  }
}
