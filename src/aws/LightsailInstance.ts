import {Resource} from '../Resource'

export interface LightsailInstanceArguments {
  availability_zone: string
  blueprint_id: string
  bundle_id: string
  id?: string
  key_pair_name?: string
  name: string
  tags?: {[key: string]: string}
  user_data?: string
}

export interface LightsailInstanceAttributes {
  arn: string
  availability_zone: string
  blueprint_id: string
  bundle_id: string
  cpu_count: number
  created_at: string
  id: string
  ipv6_address: string
  is_static_ip: boolean
  key_pair_name?: string
  name: string
  private_ip_address: string
  public_ip_address: string
  ram_size: number
  tags?: {[key: string]: string}
  user_data?: string
  username: string
}

export class LightsailInstance extends Resource<LightsailInstanceArguments, LightsailInstanceAttributes> {
  kind = 'aws_lightsail_instance'
  _outputAttrNames = [
    'arn',
    'availability_zone',
    'blueprint_id',
    'bundle_id',
    'cpu_count',
    'created_at',
    'id',
    'ipv6_address',
    'is_static_ip',
    'key_pair_name',
    'name',
    'private_ip_address',
    'public_ip_address',
    'ram_size',
    'tags',
    'user_data',
    'username',
  ] as const
}
