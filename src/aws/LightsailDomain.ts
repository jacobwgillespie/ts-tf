import {Resource} from '../Resource'

export interface LightsailDomainArguments {
  domain_name: string
  id?: string
}

export interface LightsailDomainAttributes {
  arn: string
  domain_name: string
  id: string
}

export class LightsailDomain extends Resource<LightsailDomainArguments, LightsailDomainAttributes> {
  kind = 'aws_lightsail_domain'
  _outputAttrNames = ['arn', 'domain_name', 'id'] as const
}
