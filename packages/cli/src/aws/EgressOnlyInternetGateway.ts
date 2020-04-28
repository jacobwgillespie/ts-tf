import {Resource} from '../Resource'

export interface EgressOnlyInternetGatewayArguments {
  id?: string
  vpc_id: string
}

export interface EgressOnlyInternetGatewayAttributes {
  id: string
  vpc_id: string
}

export class EgressOnlyInternetGateway extends Resource<
  EgressOnlyInternetGatewayArguments,
  EgressOnlyInternetGatewayAttributes
> {
  _kind = 'aws_egress_only_internet_gateway'

  get id() {
    return this._attr('id')
  }

  get vpc_id() {
    return this._attr('vpc_id')
  }
}
