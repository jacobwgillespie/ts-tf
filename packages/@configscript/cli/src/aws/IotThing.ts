import {Resource} from '../Resource'

export interface IotThingArguments {
  attributes?: {[key: string]: string}
  id?: string
  name: string
  thing_type_name?: string
}

export interface IotThingAttributes {
  arn: string
  attributes?: {[key: string]: string}
  default_client_id: string
  id: string
  name: string
  thing_type_name?: string
  version: number
}

export class IotThing extends Resource<IotThingArguments, IotThingAttributes> {
  _kind = 'aws_iot_thing'

  get arn() {
    return this._attr('arn')
  }

  get attributes() {
    return this._attr('attributes')
  }

  get default_client_id() {
    return this._attr('default_client_id')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get thing_type_name() {
    return this._attr('thing_type_name')
  }

  get version() {
    return this._attr('version')
  }
}
