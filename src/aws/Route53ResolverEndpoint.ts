import {Resource} from '../Resource'

export interface Route53ResolverEndpointArguments {
  direction: string
  id?: string
  name?: string
  security_group_ids: Set<string>
  tags?: {[key: string]: string}
}

export interface Route53ResolverEndpointAttributes {
  arn: string
  direction: string
  host_vpc_id: string
  id: string
  name?: string
  security_group_ids: Set<string>
  tags?: {[key: string]: string}
}

export class Route53ResolverEndpoint extends Resource<
  Route53ResolverEndpointArguments,
  Route53ResolverEndpointAttributes
> {
  _kind = 'aws_route53_resolver_endpoint'

  get arn() {
    return this._attr('arn')
  }

  get direction() {
    return this._attr('direction')
  }

  get host_vpc_id() {
    return this._attr('host_vpc_id')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get security_group_ids() {
    return this._attr('security_group_ids')
  }

  get tags() {
    return this._attr('tags')
  }
}
