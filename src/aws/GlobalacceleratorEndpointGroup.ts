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
  kind = 'aws_globalaccelerator_endpoint_group'
  _outputAttrNames = [
    'endpoint_group_region',
    'health_check_interval_seconds',
    'health_check_path',
    'health_check_port',
    'health_check_protocol',
    'id',
    'listener_arn',
    'threshold_count',
    'traffic_dial_percentage',
  ] as const
}
