import {Resource} from '../Resource'

export interface SsmParameterArguments {
  allowed_pattern?: string
  arn?: string
  description?: string
  id?: string
  key_id?: string
  name: string
  overwrite?: boolean
  tags?: {[key: string]: string}
  tier?: string
  type: string
  value: string
}

export interface SsmParameterAttributes {
  allowed_pattern?: string
  arn: string
  description?: string
  id: string
  key_id: string
  name: string
  overwrite?: boolean
  tags?: {[key: string]: string}
  tier?: string
  type: string
  value: string
  version: number
}

export class SsmParameter extends Resource<SsmParameterArguments, SsmParameterAttributes> {
  _kind = 'aws_ssm_parameter'

  get allowed_pattern() {
    return this._attr('allowed_pattern')
  }

  get arn() {
    return this._attr('arn')
  }

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get key_id() {
    return this._attr('key_id')
  }

  get name() {
    return this._attr('name')
  }

  get overwrite() {
    return this._attr('overwrite')
  }

  get tags() {
    return this._attr('tags')
  }

  get tier() {
    return this._attr('tier')
  }

  get type() {
    return this._attr('type')
  }

  get value() {
    return this._attr('value')
  }

  get version() {
    return this._attr('version')
  }
}
