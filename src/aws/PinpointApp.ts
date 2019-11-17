import {Resource} from '../Resource'

export interface PinpointAppArguments {
  id?: string
  name?: string
  name_prefix?: string
  tags?: {[key: string]: string}
}

export interface PinpointAppAttributes {
  application_id: string
  arn: string
  id: string
  name: string
  name_prefix?: string
  tags?: {[key: string]: string}
}

export class PinpointApp extends Resource<PinpointAppArguments, PinpointAppAttributes> {
  kind = 'aws_pinpoint_app'
  _outputAttrNames = ['application_id', 'arn', 'id', 'name', 'name_prefix', 'tags'] as const
}
