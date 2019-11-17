import {Resource} from '../Resource'

export interface ServiceDiscoveryHttpNamespaceArguments {
  description?: string
  id?: string
  name: string
}

export interface ServiceDiscoveryHttpNamespaceAttributes {
  arn: string
  description?: string
  id: string
  name: string
}

export class ServiceDiscoveryHttpNamespace extends Resource<
  ServiceDiscoveryHttpNamespaceArguments,
  ServiceDiscoveryHttpNamespaceAttributes
> {
  kind = 'aws_service_discovery_http_namespace'
  _outputAttrNames = ['arn', 'description', 'id', 'name'] as const
}
