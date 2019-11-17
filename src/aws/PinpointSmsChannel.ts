import {Resource} from '../Resource'

export interface PinpointSmsChannelArguments {
  application_id: string
  enabled?: boolean
  id?: string
  sender_id?: string
  short_code?: string
}

export interface PinpointSmsChannelAttributes {
  application_id: string
  enabled?: boolean
  id: string
  promotional_messages_per_second: number
  sender_id?: string
  short_code?: string
  transactional_messages_per_second: number
}

export class PinpointSmsChannel extends Resource<PinpointSmsChannelArguments, PinpointSmsChannelAttributes> {
  kind = 'aws_pinpoint_sms_channel'
  _outputAttrNames = [
    'application_id',
    'enabled',
    'id',
    'promotional_messages_per_second',
    'sender_id',
    'short_code',
    'transactional_messages_per_second',
  ] as const
}
