import {Resource} from '../Resource'

export interface VpcEndpointServiceAllowedPrincipalArguments {
  id?: string
  principal_arn: string
  vpc_endpoint_service_id: string
}

export interface VpcEndpointServiceAllowedPrincipalAttributes {
  id: string
  principal_arn: string
  vpc_endpoint_service_id: string
}

export class VpcEndpointServiceAllowedPrincipal extends Resource<
  VpcEndpointServiceAllowedPrincipalArguments,
  VpcEndpointServiceAllowedPrincipalAttributes
> {
  _kind = 'aws_vpc_endpoint_service_allowed_principal'

  get id() {
    return this._attr('id')
  }

  get principal_arn() {
    return this._attr('principal_arn')
  }

  get vpc_endpoint_service_id() {
    return this._attr('vpc_endpoint_service_id')
  }
}
