import {Resource} from '../Resource'

export interface ServiceDiscoveryPrivateDnsNamespaceArguments {
  description?: string
  id?: string
  name: string
  vpc: string
}

export interface ServiceDiscoveryPrivateDnsNamespaceAttributes {
  arn: string
  description?: string
  hosted_zone: string
  id: string
  name: string
  vpc: string
}

export class ServiceDiscoveryPrivateDnsNamespace extends Resource<
  ServiceDiscoveryPrivateDnsNamespaceArguments,
  ServiceDiscoveryPrivateDnsNamespaceAttributes
> {
  _kind = 'aws_service_discovery_private_dns_namespace'

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

  get vpc() {
    return this._attr('vpc')
  }
}
