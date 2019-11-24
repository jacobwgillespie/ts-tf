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
  _kind = 'aws_pinpoint_gcm_channel'

  get api_key() {
    return this._attr('api_key')
  }

  get application_id() {
    return this._attr('application_id')
  }

  get enabled() {
    return this._attr('enabled')
  }

  get id() {
    return this._attr('id')
  }
}
