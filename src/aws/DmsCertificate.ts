import {Resource} from '../Resource'

export interface DmsCertificateArguments {
  certificate_id: string
  certificate_pem?: string
  certificate_wallet?: string
  id?: string
}

export interface DmsCertificateAttributes {
  certificate_arn: string
  certificate_id: string
  certificate_pem?: string
  certificate_wallet?: string
  id: string
}

export class DmsCertificate extends Resource<DmsCertificateArguments, DmsCertificateAttributes> {
  _kind = 'aws_dms_certificate'

  get certificate_arn() {
    return this._attr('certificate_arn')
  }

  get certificate_id() {
    return this._attr('certificate_id')
  }

  get certificate_pem() {
    return this._attr('certificate_pem')
  }

  get certificate_wallet() {
    return this._attr('certificate_wallet')
  }

  get id() {
    return this._attr('id')
  }
}
