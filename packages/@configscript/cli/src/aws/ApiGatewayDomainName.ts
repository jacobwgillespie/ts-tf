import {Resource} from '../Resource'

export interface ApiGatewayDomainNameArguments {
  certificate_arn?: string
  certificate_body?: string
  certificate_chain?: string
  certificate_name?: string
  certificate_private_key?: string
  domain_name: string
  id?: string
  regional_certificate_arn?: string
  regional_certificate_name?: string
  security_policy?: string
}

export interface ApiGatewayDomainNameAttributes {
  certificate_arn?: string
  certificate_body?: string
  certificate_chain?: string
  certificate_name?: string
  certificate_private_key?: string
  certificate_upload_date: string
  cloudfront_domain_name: string
  cloudfront_zone_id: string
  domain_name: string
  id: string
  regional_certificate_arn?: string
  regional_certificate_name?: string
  regional_domain_name: string
  regional_zone_id: string
  security_policy: string
}

export class ApiGatewayDomainName extends Resource<ApiGatewayDomainNameArguments, ApiGatewayDomainNameAttributes> {
  _kind = 'aws_api_gateway_domain_name'

  get certificate_arn() {
    return this._attr('certificate_arn')
  }

  get certificate_body() {
    return this._attr('certificate_body')
  }

  get certificate_chain() {
    return this._attr('certificate_chain')
  }

  get certificate_name() {
    return this._attr('certificate_name')
  }

  get certificate_private_key() {
    return this._attr('certificate_private_key')
  }

  get certificate_upload_date() {
    return this._attr('certificate_upload_date')
  }

  get cloudfront_domain_name() {
    return this._attr('cloudfront_domain_name')
  }

  get cloudfront_zone_id() {
    return this._attr('cloudfront_zone_id')
  }

  get domain_name() {
    return this._attr('domain_name')
  }

  get id() {
    return this._attr('id')
  }

  get regional_certificate_arn() {
    return this._attr('regional_certificate_arn')
  }

  get regional_certificate_name() {
    return this._attr('regional_certificate_name')
  }

  get regional_domain_name() {
    return this._attr('regional_domain_name')
  }

  get regional_zone_id() {
    return this._attr('regional_zone_id')
  }

  get security_policy() {
    return this._attr('security_policy')
  }
}
