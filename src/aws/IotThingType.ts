import {Resource} from '../Resource'

export interface IotThingTypeArguments {
  deprecated?: boolean
  id?: string
  name: string
}

export interface IotThingTypeAttributes {
  arn: string
  deprecated?: boolean
  id: string
  name: string
}

export class IotThingType extends Resource<IotThingTypeArguments, IotThingTypeAttributes> {
  _kind = 'aws_iot_thing_type'

  get arn() {
    return this._attr('arn')
  }

  get deprecated() {
    return this._attr('deprecated')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }
}
