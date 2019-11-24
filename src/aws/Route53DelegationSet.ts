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
  _kind = 'aws_route53_delegation_set'

  get id() {
    return this._attr('id')
  }

  get name_servers() {
    return this._attr('name_servers')
  }

  get reference_name() {
    return this._attr('reference_name')
  }
}
