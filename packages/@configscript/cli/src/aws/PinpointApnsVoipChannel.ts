import {Resource} from '../Resource'

export interface PinpointApnsVoipChannelArguments {
  application_id: string
  bundle_id?: string
  certificate?: string
  default_authentication_method?: string
  enabled?: boolean
  id?: string
  private_key?: string
  team_id?: string
  token_key?: string
  token_key_id?: string
}

export interface PinpointApnsVoipChannelAttributes {
  application_id: string
  bundle_id?: string
  certificate?: string
  default_authentication_method?: string
  enabled?: boolean
  id: string
  private_key?: string
  team_id?: string
  token_key?: string
  token_key_id?: string
}

export class PinpointApnsVoipChannel extends Resource<
  PinpointApnsVoipChannelArguments,
  PinpointApnsVoipChannelAttributes
> {
  _kind = 'aws_pinpoint_apns_voip_channel'

  get application_id() {
    return this._attr('application_id')
  }

  get bundle_id() {
    return this._attr('bundle_id')
  }

  get certificate() {
    return this._attr('certificate')
  }

  get default_authentication_method() {
    return this._attr('default_authentication_method')
  }

  get enabled() {
    return this._attr('enabled')
  }

  get id() {
    return this._attr('id')
  }

  get private_key() {
    return this._attr('private_key')
  }

  get team_id() {
    return this._attr('team_id')
  }

  get token_key() {
    return this._attr('token_key')
  }

  get token_key_id() {
    return this._attr('token_key_id')
  }
}
