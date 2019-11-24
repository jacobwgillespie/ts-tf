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
  _kind = 'aws_pinpoint_app'

  get application_id() {
    return this._attr('application_id')
  }

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get name_prefix() {
    return this._attr('name_prefix')
  }

  get tags() {
    return this._attr('tags')
  }
}
