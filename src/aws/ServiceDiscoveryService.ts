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
  _kind = 'aws_service_discovery_service'

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

  get namespace_id() {
    return this._attr('namespace_id')
  }
}
