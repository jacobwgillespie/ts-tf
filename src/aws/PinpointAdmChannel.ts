import {Resource} from '../Resource'

export interface PinpointAdmChannelArguments {
  application_id: string
  client_id: string
  client_secret: string
  enabled?: boolean
  id?: string
}

export interface PinpointAdmChannelAttributes {
  application_id: string
  client_id: string
  client_secret: string
  enabled?: boolean
  id: string
}

export class PinpointAdmChannel extends Resource<PinpointAdmChannelArguments, PinpointAdmChannelAttributes> {
  kind = 'aws_pinpoint_adm_channel'
  _outputAttrNames = ['application_id', 'client_id', 'client_secret', 'enabled', 'id'] as const
}
