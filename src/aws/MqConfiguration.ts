import {Resource} from '../Resource'

export interface MqConfigurationArguments {
  data: string
  description?: string
  engine_type: string
  engine_version: string
  id?: string
  name: string
  tags?: {[key: string]: string}
}

export interface MqConfigurationAttributes {
  arn: string
  data: string
  description?: string
  engine_type: string
  engine_version: string
  id: string
  latest_revision: number
  name: string
  tags?: {[key: string]: string}
}

export class MqConfiguration extends Resource<MqConfigurationArguments, MqConfigurationAttributes> {
  kind = 'aws_mq_configuration'
  _outputAttrNames = [
    'arn',
    'data',
    'description',
    'engine_type',
    'engine_version',
    'id',
    'latest_revision',
    'name',
    'tags',
  ] as const
}
