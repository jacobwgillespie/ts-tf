import {Resource} from '../Resource'

export interface ApiGatewayVpcLinkArguments {
  description?: string
  id?: string
  name: string
  target_arns: Set<string>
}

export interface ApiGatewayVpcLinkAttributes {
  description?: string
  id: string
  name: string
  target_arns: Set<string>
}

export class ApiGatewayVpcLink extends Resource<ApiGatewayVpcLinkArguments, ApiGatewayVpcLinkAttributes> {
  kind = 'aws_api_gateway_vpc_link'
  _outputAttrNames = ['description', 'id', 'name', 'target_arns'] as const
}
