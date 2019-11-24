import {Resource} from '../Resource'

export interface Route53ZoneArguments {
  comment?: string
  delegation_set_id?: string
  force_destroy?: boolean
  id?: string
  name: string
  tags?: {[key: string]: string}
  vpc_id?: string
  vpc_region?: string
}

export interface Route53ZoneAttributes {
  comment?: string
  delegation_set_id?: string
  force_destroy?: boolean
  id: string
  name: string
  name_servers: Array<string>
  tags?: {[key: string]: string}
  vpc_id: string
  vpc_region: string
  zone_id: string
}

export class Route53Zone extends Resource<Route53ZoneArguments, Route53ZoneAttributes> {
  _kind = 'aws_route53_zone'

  get comment() {
    return this._attr('comment')
  }

  get delegation_set_id() {
    return this._attr('delegation_set_id')
  }

  get force_destroy() {
    return this._attr('force_destroy')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get name_servers() {
    return this._attr('name_servers')
  }

  get tags() {
    return this._attr('tags')
  }

  get vpc_id() {
    return this._attr('vpc_id')
  }

  get vpc_region() {
    return this._attr('vpc_region')
  }

  get zone_id() {
    return this._attr('zone_id')
  }
}
