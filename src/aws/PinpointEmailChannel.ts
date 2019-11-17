import {Resource} from '../Resource'

export interface PinpointEmailChannelArguments {
  application_id: string
  enabled?: boolean
  from_address: string
  id?: string
  identity: string
  role_arn: string
}

export interface PinpointEmailChannelAttributes {
  application_id: string
  enabled?: boolean
  from_address: string
  id: string
  identity: string
  messages_per_second: number
  role_arn: string
}

export class PinpointEmailChannel extends Resource<PinpointEmailChannelArguments, PinpointEmailChannelAttributes> {
  kind = 'aws_pinpoint_email_channel'
  _outputAttrNames = [
    'application_id',
    'enabled',
    'from_address',
    'id',
    'identity',
    'messages_per_second',
    'role_arn',
  ] as const
}
