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
  _kind = 'aws_acm_certificate_validation'

  get certificate_arn() {
    return this._attr('certificate_arn')
  }

  get id() {
    return this._attr('id')
  }

  get validation_record_fqdns() {
    return this._attr('validation_record_fqdns')
  }
}
