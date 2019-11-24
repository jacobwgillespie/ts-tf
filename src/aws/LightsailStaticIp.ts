import {Resource} from '../Resource'

export interface LightsailStaticIpArguments {
  id?: string
  name: string
}

export interface LightsailStaticIpAttributes {
  arn: string
  id: string
  ip_address: string
  name: string
  support_code: string
}

export class LightsailStaticIp extends Resource<LightsailStaticIpArguments, LightsailStaticIpAttributes> {
  _kind = 'aws_lightsail_static_ip'

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get ip_address() {
    return this._attr('ip_address')
  }

  get name() {
    return this._attr('name')
  }

  get support_code() {
    return this._attr('support_code')
  }
}
