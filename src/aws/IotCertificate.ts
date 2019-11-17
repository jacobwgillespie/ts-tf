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
  kind = 'aws_iot_certificate'
  _outputAttrNames = ['active', 'arn', 'certificate_pem', 'csr', 'id', 'private_key', 'public_key'] as const
}
