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
  kind = 'aws_iot_thing_type'
  _outputAttrNames = ['arn', 'deprecated', 'id', 'name'] as const
}
