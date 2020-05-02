import {Resource} from '../Resource'

export interface SfnActivityArguments {
  id?: string
  name: string
  tags?: {[key: string]: string}
}

export interface SfnActivityAttributes {
  creation_date: string
  id: string
  name: string
  tags?: {[key: string]: string}
}

export class SfnActivity extends Resource<SfnActivityArguments, SfnActivityAttributes> {
  _kind = 'aws_sfn_activity'

  get creation_date() {
    return this._attr('creation_date')
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
