import {Resource} from '../Resource'

export interface AthenaWorkgroupArguments {
  description?: string
  id?: string
  name: string
  state?: string
  tags?: {[key: string]: string}
}

export interface AthenaWorkgroupAttributes {
  arn: string
  description?: string
  id: string
  name: string
  state?: string
  tags?: {[key: string]: string}
}

export class AthenaWorkgroup extends Resource<AthenaWorkgroupArguments, AthenaWorkgroupAttributes> {
  _kind = 'aws_athena_workgroup'

  get arn() {
    return this._attr('arn')
  }

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get state() {
    return this._attr('state')
  }

  get tags() {
    return this._attr('tags')
  }
}
