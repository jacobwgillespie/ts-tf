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
  kind = 'aws_route53_resolver_endpoint'
  _outputAttrNames = ['arn', 'direction', 'host_vpc_id', 'id', 'name', 'security_group_ids', 'tags'] as const
}
