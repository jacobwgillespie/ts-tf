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
  _kind = 'aws_api_gateway_client_certificate'

  get created_date() {
    return this._attr('created_date')
  }

  get description() {
    return this._attr('description')
  }

  get expiration_date() {
    return this._attr('expiration_date')
  }

  get id() {
    return this._attr('id')
  }

  get pem_encoded_certificate() {
    return this._attr('pem_encoded_certificate')
  }
}
