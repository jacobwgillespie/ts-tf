import {Resource} from '../Resource'

export interface AlbListenerCertificateArguments {
  certificate_arn: string
  id?: string
  listener_arn: string
}

export interface AlbListenerCertificateAttributes {
  certificate_arn: string
  id: string
  listener_arn: string
}

export class AlbListenerCertificate extends Resource<
  AlbListenerCertificateArguments,
  AlbListenerCertificateAttributes
> {
  kind = 'aws_alb_listener_certificate'
  _outputAttrNames = ['certificate_arn', 'id', 'listener_arn'] as const
}
