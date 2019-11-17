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
  kind = 'aws_pinpoint_baidu_channel'
  _outputAttrNames = ['api_key', 'application_id', 'enabled', 'id', 'secret_key'] as const
}
