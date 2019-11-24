import {Resource} from '../Resource'

export interface AppCookieStickinessPolicyArguments {
  cookie_name: string
  id?: string
  lb_port: number
  load_balancer: string
  name: string
}

export interface AppCookieStickinessPolicyAttributes {
  cookie_name: string
  id: string
  lb_port: number
  load_balancer: string
  name: string
}

export class AppCookieStickinessPolicy extends Resource<
  AppCookieStickinessPolicyArguments,
  AppCookieStickinessPolicyAttributes
> {
  _kind = 'aws_app_cookie_stickiness_policy'

  get cookie_name() {
    return this._attr('cookie_name')
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
