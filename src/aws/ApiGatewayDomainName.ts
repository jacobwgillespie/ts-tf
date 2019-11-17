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
  kind = 'aws_api_gateway_domain_name'
  _outputAttrNames = [
    'certificate_arn',
    'certificate_body',
    'certificate_chain',
    'certificate_name',
    'certificate_private_key',
    'certificate_upload_date',
    'cloudfront_domain_name',
    'cloudfront_zone_id',
    'domain_name',
    'id',
    'regional_certificate_arn',
    'regional_certificate_name',
    'regional_domain_name',
    'regional_zone_id',
    'security_policy',
  ] as const
}
