import {Resource} from '../Resource'

export interface RamResourceShareArguments {
  allow_external_principals?: boolean
  id?: string
  name: string
  tags?: {[key: string]: string}
}

export interface RamResourceShareAttributes {
  allow_external_principals?: boolean
  arn: string
  id: string
  name: string
  tags?: {[key: string]: string}
}

export class RamResourceShare extends Resource<RamResourceShareArguments, RamResourceShareAttributes> {
  _kind = 'aws_ram_resource_share'

  get allow_external_principals() {
    return this._attr('allow_external_principals')
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

  get tags() {
    return this._attr('tags')
  }
}
