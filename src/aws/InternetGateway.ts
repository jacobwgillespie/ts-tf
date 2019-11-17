import {Resource} from '../Resource'

export interface InternetGatewayArguments {
  id?: string
  tags?: {[key: string]: string}
  vpc_id?: string
}

export interface InternetGatewayAttributes {
  id: string
  owner_id: string
  tags?: {[key: string]: string}
  vpc_id?: string
}

export class InternetGateway extends Resource<InternetGatewayArguments, InternetGatewayAttributes> {
  kind = 'aws_internet_gateway'
  _outputAttrNames = ['id', 'owner_id', 'tags', 'vpc_id'] as const
}
