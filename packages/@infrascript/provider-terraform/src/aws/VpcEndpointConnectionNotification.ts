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
  _kind = 'aws_vpc_endpoint_connection_notification'

  get connection_events() {
    return this._attr('connection_events')
  }

  get connection_notification_arn() {
    return this._attr('connection_notification_arn')
  }

  get id() {
    return this._attr('id')
  }

  get notification_type() {
    return this._attr('notification_type')
  }

  get state() {
    return this._attr('state')
  }

  get vpc_endpoint_id() {
    return this._attr('vpc_endpoint_id')
  }

  get vpc_endpoint_service_id() {
    return this._attr('vpc_endpoint_service_id')
  }
}
