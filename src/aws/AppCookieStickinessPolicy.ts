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
  kind = 'aws_app_cookie_stickiness_policy'
  _outputAttrNames = ['cookie_name', 'id', 'lb_port', 'load_balancer', 'name'] as const
}
