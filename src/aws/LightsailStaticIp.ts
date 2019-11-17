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
  kind = 'aws_lightsail_static_ip'
  _outputAttrNames = ['arn', 'id', 'ip_address', 'name', 'support_code'] as const
}
