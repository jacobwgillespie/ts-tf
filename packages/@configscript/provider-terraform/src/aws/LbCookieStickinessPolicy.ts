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
  _kind = 'aws_lb_cookie_stickiness_policy'

  get cookie_expiration_period() {
    return this._attr('cookie_expiration_period')
  }

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
