import {Resource} from '../Resource'

export interface AcmCertificateArguments {
  certificate_authority_arn?: string
  certificate_body?: string
  certificate_chain?: string
  domain_name?: string
  id?: string
  private_key?: string
  subject_alternative_names?: Array<string>
  tags?: {[key: string]: string}
  validation_method?: string
}

export interface AcmCertificateAttributes {
  arn: string
  certificate_authority_arn?: string
  certificate_body?: string
  certificate_chain?: string
  domain_name: string
  domain_validation_options: Array<{
    domain_name: string
    resource_record_name: string
    resource_record_type: string
    resource_record_value: string
  }>
  id: string
  private_key?: string
  subject_alternative_names: Array<string>
  tags?: {[key: string]: string}
  validation_emails: Array<string>
  validation_method: string
}

export class AcmCertificate extends Resource<AcmCertificateArguments, AcmCertificateAttributes> {
  _kind = 'aws_acm_certificate'

  get arn() {
    return this._attr('arn')
  }

  get certificate_authority_arn() {
    return this._attr('certificate_authority_arn')
  }

  get certificate_body() {
    return this._attr('certificate_body')
  }

  get certificate_chain() {
    return this._attr('certificate_chain')
  }

  get domain_name() {
    return this._attr('domain_name')
  }

  get domain_validation_options() {
    return this._attr('domain_validation_options')
  }

  get id() {
    return this._attr('id')
  }

  get private_key() {
    return this._attr('private_key')
  }

  get subject_alternative_names() {
    return this._attr('subject_alternative_names')
  }

  get tags() {
    return this._attr('tags')
  }

  get validation_emails() {
    return this._attr('validation_emails')
  }

  get validation_method() {
    return this._attr('validation_method')
  }
}
