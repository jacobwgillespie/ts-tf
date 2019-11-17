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
  kind = 'aws_dms_certificate'
  _outputAttrNames = ['certificate_arn', 'certificate_id', 'certificate_pem', 'certificate_wallet', 'id'] as const
}
