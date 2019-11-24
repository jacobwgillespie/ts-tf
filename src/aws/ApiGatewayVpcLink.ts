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
  _kind = 'aws_api_gateway_vpc_link'

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get target_arns() {
    return this._attr('target_arns')
  }
}
