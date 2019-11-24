import {Resource} from '../Resource'

export interface AthenaDatabaseArguments {
  bucket: string
  force_destroy?: boolean
  id?: string
  name: string
}

export interface AthenaDatabaseAttributes {
  bucket: string
  force_destroy?: boolean
  id: string
  name: string
}

export class AthenaDatabase extends Resource<AthenaDatabaseArguments, AthenaDatabaseAttributes> {
  _kind = 'aws_athena_database'

  get bucket() {
    return this._attr('bucket')
  }

  get force_destroy() {
    return this._attr('force_destroy')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }
}
