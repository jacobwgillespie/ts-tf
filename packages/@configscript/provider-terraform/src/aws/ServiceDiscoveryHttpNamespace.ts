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
  _kind = 'aws_service_discovery_http_namespace'

  get arn() {
    return this._attr('arn')
  }

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }
}
