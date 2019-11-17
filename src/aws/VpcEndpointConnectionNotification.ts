import {Resource} from '../Resource'

export interface VpcEndpointConnectionNotificationArguments {
  connection_events: Set<string>
  connection_notification_arn: string
  id?: string
  vpc_endpoint_id?: string
  vpc_endpoint_service_id?: string
}

export interface VpcEndpointConnectionNotificationAttributes {
  connection_events: Set<string>
  connection_notification_arn: string
  id: string
  notification_type: string
  state: string
  vpc_endpoint_id?: string
  vpc_endpoint_service_id?: string
}

export class VpcEndpointConnectionNotification extends Resource<
  VpcEndpointConnectionNotificationArguments,
  VpcEndpointConnectionNotificationAttributes
> {
  kind = 'aws_vpc_endpoint_connection_notification'
  _outputAttrNames = [
    'connection_events',
    'connection_notification_arn',
    'id',
    'notification_type',
    'state',
    'vpc_endpoint_id',
    'vpc_endpoint_service_id',
  ] as const
}
