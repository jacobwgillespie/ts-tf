import {Resource} from '../Resource'

export interface IotCertificateArguments {
  active: boolean
  csr?: string
  id?: string
}

export interface IotCertificateAttributes {
  active: boolean
  arn: string
  certificate_pem: string
  csr?: string
  id: string
  private_key: string
  public_key: string
}

export class IotCertificate extends Resource<IotCertificateArguments, IotCertificateAttributes> {
  _kind = 'aws_iot_certificate'

  get active() {
    return this._attr('active')
  }

  get arn() {
    return this._attr('arn')
  }

  get certificate_pem() {
    return this._attr('certificate_pem')
  }

  get csr() {
    return this._attr('csr')
  }

  get id() {
    return this._attr('id')
  }

  get private_key() {
    return this._attr('private_key')
  }

  get public_key() {
    return this._attr('public_key')
  }
}
