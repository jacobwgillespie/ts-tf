import {Resource} from '../Resource'

export interface PinpointEventStreamArguments {
  application_id: string
  destination_stream_arn: string
  id?: string
  role_arn: string
}

export interface PinpointEventStreamAttributes {
  application_id: string
  destination_stream_arn: string
  id: string
  role_arn: string
}

export class PinpointEventStream extends Resource<PinpointEventStreamArguments, PinpointEventStreamAttributes> {
  _kind = 'aws_pinpoint_event_stream'

  get application_id() {
    return this._attr('application_id')
  }

  get destination_stream_arn() {
    return this._attr('destination_stream_arn')
  }

  get id() {
    return this._attr('id')
  }

  get role_arn() {
    return this._attr('role_arn')
  }
}
