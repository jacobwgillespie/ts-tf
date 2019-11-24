import {Resource} from '../Resource'

export interface PinpointBaiduChannelArguments {
  api_key: string
  application_id: string
  enabled?: boolean
  id?: string
  secret_key: string
}

export interface PinpointBaiduChannelAttributes {
  api_key: string
  application_id: string
  enabled?: boolean
  id: string
  secret_key: string
}

export class PinpointBaiduChannel extends Resource<PinpointBaiduChannelArguments, PinpointBaiduChannelAttributes> {
  _kind = 'aws_pinpoint_baidu_channel'

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

  get secret_key() {
    return this._attr('secret_key')
  }
}
