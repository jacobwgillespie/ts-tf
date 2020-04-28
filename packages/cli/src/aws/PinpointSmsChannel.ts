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
  _kind = 'aws_pinpoint_sms_channel'

  get application_id() {
    return this._attr('application_id')
  }

  get enabled() {
    return this._attr('enabled')
  }

  get id() {
    return this._attr('id')
  }

  get promotional_messages_per_second() {
    return this._attr('promotional_messages_per_second')
  }

  get sender_id() {
    return this._attr('sender_id')
  }

  get short_code() {
    return this._attr('short_code')
  }

  get transactional_messages_per_second() {
    return this._attr('transactional_messages_per_second')
  }
}
