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
  _kind = 'aws_alb_listener_certificate'

  get certificate_arn() {
    return this._attr('certificate_arn')
  }

  get id() {
    return this._attr('id')
  }

  get listener_arn() {
    return this._attr('listener_arn')
  }
}
