import {Resource} from '../Resource'

export interface LbListenerArguments {
  certificate_arn?: string
  id?: string
  load_balancer_arn: string
  port: number
  protocol?: string
  ssl_policy?: string
}

export interface LbListenerAttributes {
  arn: string
  certificate_arn?: string
  id: string
  load_balancer_arn: string
  port: number
  protocol?: string
  ssl_policy: string
}

export class LbListener extends Resource<LbListenerArguments, LbListenerAttributes> {
  _kind = 'aws_lb_listener'

  get arn() {
    return this._attr('arn')
  }

  get certificate_arn() {
    return this._attr('certificate_arn')
  }

  get id() {
    return this._attr('id')
  }

  get load_balancer_arn() {
    return this._attr('load_balancer_arn')
  }

  get port() {
    return this._attr('port')
  }

  get protocol() {
    return this._attr('protocol')
  }

  get ssl_policy() {
    return this._attr('ssl_policy')
  }
}
