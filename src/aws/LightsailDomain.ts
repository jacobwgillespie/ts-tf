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
  _kind = 'aws_lightsail_domain'

  get arn() {
    return this._attr('arn')
  }

  get domain_name() {
    return this._attr('domain_name')
  }

  get id() {
    return this._attr('id')
  }
}
