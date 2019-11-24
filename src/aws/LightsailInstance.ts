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
  _kind = 'aws_lightsail_instance'

  get arn() {
    return this._attr('arn')
  }

  get availability_zone() {
    return this._attr('availability_zone')
  }

  get blueprint_id() {
    return this._attr('blueprint_id')
  }

  get bundle_id() {
    return this._attr('bundle_id')
  }

  get cpu_count() {
    return this._attr('cpu_count')
  }

  get created_at() {
    return this._attr('created_at')
  }

  get id() {
    return this._attr('id')
  }

  get ipv6_address() {
    return this._attr('ipv6_address')
  }

  get is_static_ip() {
    return this._attr('is_static_ip')
  }

  get key_pair_name() {
    return this._attr('key_pair_name')
  }

  get name() {
    return this._attr('name')
  }

  get private_ip_address() {
    return this._attr('private_ip_address')
  }

  get public_ip_address() {
    return this._attr('public_ip_address')
  }

  get ram_size() {
    return this._attr('ram_size')
  }

  get tags() {
    return this._attr('tags')
  }

  get user_data() {
    return this._attr('user_data')
  }

  get username() {
    return this._attr('username')
  }
}
