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
  kind = 'aws_pinpoint_event_stream'
  _outputAttrNames = ['application_id', 'destination_stream_arn', 'id', 'role_arn'] as const
}
