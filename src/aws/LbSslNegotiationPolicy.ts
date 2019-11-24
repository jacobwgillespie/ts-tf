import {Resource} from '../Resource'

export interface LbSslNegotiationPolicyArguments {
  id?: string
  lb_port: number
  load_balancer: string
  name: string
}

export interface LbSslNegotiationPolicyAttributes {
  id: string
  lb_port: number
  load_balancer: string
  name: string
}

export class LbSslNegotiationPolicy extends Resource<
  LbSslNegotiationPolicyArguments,
  LbSslNegotiationPolicyAttributes
> {
  _kind = 'aws_lb_ssl_negotiation_policy'

  get id() {
    return this._attr('id')
  }

  get lb_port() {
    return this._attr('lb_port')
  }

  get load_balancer() {
    return this._attr('load_balancer')
  }

  get name() {
    return this._attr('name')
  }
}
