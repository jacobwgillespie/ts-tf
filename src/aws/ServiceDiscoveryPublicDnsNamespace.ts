import {Resource} from '../Resource'

export interface ServiceDiscoveryPublicDnsNamespaceArguments {
  description?: string
  id?: string
  name: string
}

export interface ServiceDiscoveryPublicDnsNamespaceAttributes {
  arn: string
  description?: string
  hosted_zone: string
  id: string
  name: string
}

export class ServiceDiscoveryPublicDnsNamespace extends Resource<
  ServiceDiscoveryPublicDnsNamespaceArguments,
  ServiceDiscoveryPublicDnsNamespaceAttributes
> {
  _kind = 'aws_service_discovery_public_dns_namespace'

  get arn() {
    return this._attr('arn')
  }

  get description() {
    return this._attr('description')
  }

  get hosted_zone() {
    return this._attr('hosted_zone')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }
}
