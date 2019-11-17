import {Resource} from '../Resource'

export interface AcmCertificateValidationArguments {
  certificate_arn: string
  id?: string
  validation_record_fqdns?: Set<string>
}

export interface AcmCertificateValidationAttributes {
  certificate_arn: string
  id: string
  validation_record_fqdns?: Set<string>
}

export class AcmCertificateValidation extends Resource<
  AcmCertificateValidationArguments,
  AcmCertificateValidationAttributes
> {
  kind = 'aws_acm_certificate_validation'
  _outputAttrNames = ['certificate_arn', 'id', 'validation_record_fqdns'] as const
}
