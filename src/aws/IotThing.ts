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
  kind = 'aws_iot_thing'
  _outputAttrNames = ['arn', 'attributes', 'default_client_id', 'id', 'name', 'thing_type_name', 'version'] as const
}
