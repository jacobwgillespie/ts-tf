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
  kind = 'aws_vpc_endpoint_service_allowed_principal'
  _outputAttrNames = ['id', 'principal_arn', 'vpc_endpoint_service_id'] as const
}
