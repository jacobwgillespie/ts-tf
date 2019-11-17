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
  kind = 'aws_service_discovery_public_dns_namespace'
  _outputAttrNames = ['arn', 'description', 'hosted_zone', 'id', 'name'] as const
}
