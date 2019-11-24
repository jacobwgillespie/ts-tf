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
  _kind = 'aws_pinpoint_adm_channel'

  get application_id() {
    return this._attr('application_id')
  }

  get client_id() {
    return this._attr('client_id')
  }

  get client_secret() {
    return this._attr('client_secret')
  }

  get enabled() {
    return this._attr('enabled')
  }

  get id() {
    return this._attr('id')
  }
}
