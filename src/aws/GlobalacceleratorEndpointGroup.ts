import {Resource} from '../Resource'

export interface GlobalacceleratorEndpointGroupArguments {
  endpoint_group_region?: string
  health_check_interval_seconds?: number
  health_check_path?: string
  health_check_port?: number
  health_check_protocol?: string
  id?: string
  listener_arn: string
  threshold_count?: number
  traffic_dial_percentage?: number
}

export interface GlobalacceleratorEndpointGroupAttributes {
  endpoint_group_region: string
  health_check_interval_seconds?: number
  health_check_path?: string
  health_check_port?: number
  health_check_protocol?: string
  id: string
  listener_arn: string
  threshold_count?: number
  traffic_dial_percentage?: number
}

export class GlobalacceleratorEndpointGroup extends Resource<
  GlobalacceleratorEndpointGroupArguments,
  GlobalacceleratorEndpointGroupAttributes
> {
  _kind = 'aws_globalaccelerator_endpoint_group'

  get endpoint_group_region() {
    return this._attr('endpoint_group_region')
  }

  get health_check_interval_seconds() {
    return this._attr('health_check_interval_seconds')
  }

  get health_check_path() {
    return this._attr('health_check_path')
  }

  get health_check_port() {
    return this._attr('health_check_port')
  }

  get health_check_protocol() {
    return this._attr('health_check_protocol')
  }

  get id() {
    return this._attr('id')
  }

  get listener_arn() {
    return this._attr('listener_arn')
  }

  get threshold_count() {
    return this._attr('threshold_count')
  }

  get traffic_dial_percentage() {
    return this._attr('traffic_dial_percentage')
  }
}
