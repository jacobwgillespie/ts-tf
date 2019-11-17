import {Resource} from '../Resource'

export interface Route53DelegationSetArguments {
  id?: string
  reference_name?: string
}

export interface Route53DelegationSetAttributes {
  id: string
  name_servers: Array<string>
  reference_name?: string
}

export class Route53DelegationSet extends Resource<Route53DelegationSetArguments, Route53DelegationSetAttributes> {
  kind = 'aws_route53_delegation_set'
  _outputAttrNames = ['id', 'name_servers', 'reference_name'] as const
}
