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
  kind = 'aws_service_discovery_private_dns_namespace'
  _outputAttrNames = ['arn', 'description', 'hosted_zone', 'id', 'name', 'vpc'] as const
}
