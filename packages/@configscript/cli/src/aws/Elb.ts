import {Resource} from '../Resource'

export interface ElbArguments {
  availability_zones?: Set<string>
  connection_draining?: boolean
  connection_draining_timeout?: number
  cross_zone_load_balancing?: boolean
  id?: string
  idle_timeout?: number
  instances?: Set<string>
  internal?: boolean
  name?: string
  name_prefix?: string
  security_groups?: Set<string>
  source_security_group?: string
  subnets?: Set<string>
  tags?: {[key: string]: string}
}

export interface ElbAttributes {
  arn: string
  availability_zones: Set<string>
  connection_draining?: boolean
  connection_draining_timeout?: number
  cross_zone_load_balancing?: boolean
  dns_name: string
  id: string
  idle_timeout?: number
  instances: Set<string>
  internal: boolean
  name: string
  name_prefix?: string
  security_groups: Set<string>
  source_security_group: string
  source_security_group_id: string
  subnets: Set<string>
  tags?: {[key: string]: string}
  zone_id: string
}

export class Elb extends Resource<ElbArguments, ElbAttributes> {
  _kind = 'aws_elb'

  get arn() {
    return this._attr('arn')
  }

  get availability_zones() {
    return this._attr('availability_zones')
  }

  get connection_draining() {
    return this._attr('connection_draining')
  }

  get connection_draining_timeout() {
    return this._attr('connection_draining_timeout')
  }

  get cross_zone_load_balancing() {
    return this._attr('cross_zone_load_balancing')
  }

  get dns_name() {
    return this._attr('dns_name')
  }

  get id() {
    return this._attr('id')
  }

  get idle_timeout() {
    return this._attr('idle_timeout')
  }

  get instances() {
    return this._attr('instances')
  }

  get internal() {
    return this._attr('internal')
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

  get source_security_group() {
    return this._attr('source_security_group')
  }

  get source_security_group_id() {
    return this._attr('source_security_group_id')
  }

  get subnets() {
    return this._attr('subnets')
  }

  get tags() {
    return this._attr('tags')
  }

  get zone_id() {
    return this._attr('zone_id')
  }
}
