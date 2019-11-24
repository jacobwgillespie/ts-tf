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
  _kind = 'aws_lb_listener_certificate'

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
