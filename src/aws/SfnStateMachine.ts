import {Resource} from '../Resource'

export interface SfnStateMachineArguments {
  definition: string
  id?: string
  name: string
  role_arn: string
  tags?: {[key: string]: string}
}

export interface SfnStateMachineAttributes {
  creation_date: string
  definition: string
  id: string
  name: string
  role_arn: string
  status: string
  tags?: {[key: string]: string}
}

export class SfnStateMachine extends Resource<SfnStateMachineArguments, SfnStateMachineAttributes> {
  _kind = 'aws_sfn_state_machine'

  get creation_date() {
    return this._attr('creation_date')
  }

  get definition() {
    return this._attr('definition')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get role_arn() {
    return this._attr('role_arn')
  }

  get status() {
    return this._attr('status')
  }

  get tags() {
    return this._attr('tags')
  }
}
