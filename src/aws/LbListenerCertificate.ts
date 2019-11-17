import {Resource} from '../Resource'

export interface LbListenerCertificateArguments {
  certificate_arn: string
  id?: string
  listener_arn: string
}

export interface LbListenerCertificateAttributes {
  certificate_arn: string
  id: string
  listener_arn: string
}

export class LbListenerCertificate extends Resource<LbListenerCertificateArguments, LbListenerCertificateAttributes> {
  kind = 'aws_lb_listener_certificate'
  _outputAttrNames = ['certificate_arn', 'id', 'listener_arn'] as const
}
