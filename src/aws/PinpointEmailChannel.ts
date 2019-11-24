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
  _kind = 'aws_pinpoint_email_channel'

  get application_id() {
    return this._attr('application_id')
  }

  get enabled() {
    return this._attr('enabled')
  }

  get from_address() {
    return this._attr('from_address')
  }

  get id() {
    return this._attr('id')
  }

  get identity() {
    return this._attr('identity')
  }

  get messages_per_second() {
    return this._attr('messages_per_second')
  }

  get role_arn() {
    return this._attr('role_arn')
  }
}
