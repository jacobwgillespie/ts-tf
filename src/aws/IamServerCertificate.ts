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
  kind = 'aws_iam_server_certificate'
  _outputAttrNames = [
    'arn',
    'certificate_body',
    'certificate_chain',
    'id',
    'name',
    'name_prefix',
    'path',
    'private_key',
  ] as const
}
