import {Resource} from '../Resource'

export interface ServiceDiscoveryServiceArguments {
  description?: string
  id?: string
  name: string
  namespace_id?: string
}

export interface ServiceDiscoveryServiceAttributes {
  arn: string
  description?: string
  id: string
  name: string
  namespace_id: string
}

export class ServiceDiscoveryService extends Resource<
  ServiceDiscoveryServiceArguments,
  ServiceDiscoveryServiceAttributes
> {
  kind = 'aws_service_discovery_service'
  _outputAttrNames = ['arn', 'description', 'id', 'name', 'namespace_id'] as const
}
