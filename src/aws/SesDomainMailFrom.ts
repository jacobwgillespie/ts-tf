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
  kind = 'aws_ses_domain_mail_from'
  _outputAttrNames = ['behavior_on_mx_failure', 'domain', 'id', 'mail_from_domain'] as const
}
