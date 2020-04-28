import {Resource} from '../Resource'

export interface SsmActivationArguments {
  description?: string
  expiration_date?: string
  iam_role: string
  id?: string
  name?: string
  registration_limit?: number
  tags?: {[key: string]: string}
}

export interface SsmActivationAttributes {
  activation_code: string
  description?: string
  expiration_date?: string
  expired: string
  iam_role: string
  id: string
  name?: string
  registration_count: number
  registration_limit?: number
  tags?: {[key: string]: string}
}

export class SsmActivation extends Resource<SsmActivationArguments, SsmActivationAttributes> {
  _kind = 'aws_ssm_activation'

  get activation_code() {
    return this._attr('activation_code')
  }

  get description() {
    return this._attr('description')
  }

  get expiration_date() {
    return this._attr('expiration_date')
  }

  get expired() {
    return this._attr('expired')
  }

  get iam_role() {
    return this._attr('iam_role')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get registration_count() {
    return this._attr('registration_count')
  }

  get registration_limit() {
    return this._attr('registration_limit')
  }

  get tags() {
    return this._attr('tags')
  }
}
