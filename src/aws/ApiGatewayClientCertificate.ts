import {Resource} from '../Resource'

export interface ApiGatewayClientCertificateArguments {
  description?: string
  id?: string
}

export interface ApiGatewayClientCertificateAttributes {
  created_date: string
  description?: string
  expiration_date: string
  id: string
  pem_encoded_certificate: string
}

export class ApiGatewayClientCertificate extends Resource<
  ApiGatewayClientCertificateArguments,
  ApiGatewayClientCertificateAttributes
> {
  kind = 'aws_api_gateway_client_certificate'
  _outputAttrNames = ['created_date', 'description', 'expiration_date', 'id', 'pem_encoded_certificate'] as const
}
