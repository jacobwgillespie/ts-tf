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
  kind = 'aws_egress_only_internet_gateway'
  _outputAttrNames = ['id', 'vpc_id'] as const
}
