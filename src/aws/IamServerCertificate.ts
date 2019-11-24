import {Resource} from '../Resource'

export interface IamServerCertificateArguments {
  arn?: string
  certificate_body: string
  certificate_chain?: string
  id?: string
  name?: string
  name_prefix?: string
  path?: string
  private_key: string
}

export interface IamServerCertificateAttributes {
  arn: string
  certificate_body: string
  certificate_chain?: string
  id: string
  name: string
  name_prefix?: string
  path?: string
  private_key: string
}

export class IamServerCertificate extends Resource<IamServerCertificateArguments, IamServerCertificateAttributes> {
  _kind = 'aws_iam_server_certificate'

  get arn() {
    return this._attr('arn')
  }

  get certificate_body() {
    return this._attr('certificate_body')
  }

  get certificate_chain() {
    return this._attr('certificate_chain')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get name_prefix() {
    return this._attr('name_prefix')
  }

  get path() {
    return this._attr('path')
  }

  get private_key() {
    return this._attr('private_key')
  }
}
