import {Resource} from '../Resource'

export interface LbArguments {
  enable_cross_zone_load_balancing?: boolean
  enable_deletion_protection?: boolean
  enable_http2?: boolean
  id?: string
  idle_timeout?: number
  internal?: boolean
  ip_address_type?: string
  load_balancer_type?: string
  name?: string
  name_prefix?: string
  security_groups?: Set<string>
  subnets?: Set<string>
  tags?: {[key: string]: string}
}

export interface LbAttributes {
  arn: string
  arn_suffix: string
  dns_name: string
  enable_cross_zone_load_balancing?: boolean
  enable_deletion_protection?: boolean
  enable_http2?: boolean
  id: string
  idle_timeout?: number
  internal: boolean
  ip_address_type: string
  load_balancer_type?: string
  name: string
  name_prefix?: string
  security_groups: Set<string>
  subnets: Set<string>
  tags?: {[key: string]: string}
  vpc_id: string
  zone_id: string
}

export class Lb extends Resource<LbArguments, LbAttributes> {
  _kind = 'aws_lb'

  get arn() {
    return this._attr('arn')
  }

  get arn_suffix() {
    return this._attr('arn_suffix')
  }

  get dns_name() {
    return this._attr('dns_name')
  }

  get enable_cross_zone_load_balancing() {
    return this._attr('enable_cross_zone_load_balancing')
  }

  get enable_deletion_protection() {
    return this._attr('enable_deletion_protection')
  }

  get enable_http2() {
    return this._attr('enable_http2')
  }

  get id() {
    return this._attr('id')
  }

  get idle_timeout() {
    return this._attr('idle_timeout')
  }

  get internal() {
    return this._attr('internal')
  }

  get ip_address_type() {
    return this._attr('ip_address_type')
  }

  get load_balancer_type() {
    return this._attr('load_balancer_type')
  }

  get name() {
    return this._attr('name')
  }

  get name_prefix() {
    return this._attr('name_prefix')
  }

  get security_groups() {
    return this._attr('security_groups')
  }

  get subnets() {
    return this._attr('subnets')
  }

  get tags() {
    return this._attr('tags')
  }

  get vpc_id() {
    return this._attr('vpc_id')
  }

  get zone_id() {
    return this._attr('zone_id')
  }
}
