import {Resource} from '../Resource'

export interface PinpointGcmChannelArguments {
  api_key: string
  application_id: string
  enabled?: boolean
  id?: string
}

export interface PinpointGcmChannelAttributes {
  api_key: string
  application_id: string
  enabled?: boolean
  id: string
}

export class PinpointGcmChannel extends Resource<PinpointGcmChannelArguments, PinpointGcmChannelAttributes> {
  kind = 'aws_pinpoint_gcm_channel'
  _outputAttrNames = ['api_key', 'application_id', 'enabled', 'id'] as const
}
