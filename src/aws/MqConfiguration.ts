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
  _kind = 'aws_mq_configuration'

  get arn() {
    return this._attr('arn')
  }

  get data() {
    return this._attr('data')
  }

  get description() {
    return this._attr('description')
  }

  get engine_type() {
    return this._attr('engine_type')
  }

  get engine_version() {
    return this._attr('engine_version')
  }

  get id() {
    return this._attr('id')
  }

  get latest_revision() {
    return this._attr('latest_revision')
  }

  get name() {
    return this._attr('name')
  }

  get tags() {
    return this._attr('tags')
  }
}
