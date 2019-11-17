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
  kind = 'aws_acm_certificate'
  _outputAttrNames = [
    'arn',
    'certificate_authority_arn',
    'certificate_body',
    'certificate_chain',
    'domain_name',
    'domain_validation_options',
    'id',
    'private_key',
    'subject_alternative_names',
    'tags',
    'validation_emails',
    'validation_method',
  ] as const
}
