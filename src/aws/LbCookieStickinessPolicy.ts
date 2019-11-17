import {Resource} from '../Resource'

export interface LbCookieStickinessPolicyArguments {
  cookie_expiration_period?: number
  id?: string
  lb_port: number
  load_balancer: string
  name: string
}

export interface LbCookieStickinessPolicyAttributes {
  cookie_expiration_period?: number
  id: string
  lb_port: number
  load_balancer: string
  name: string
}

export class LbCookieStickinessPolicy extends Resource<
  LbCookieStickinessPolicyArguments,
  LbCookieStickinessPolicyAttributes
> {
  kind = 'aws_lb_cookie_stickiness_policy'
  _outputAttrNames = ['cookie_expiration_period', 'id', 'lb_port', 'load_balancer', 'name'] as const
}
