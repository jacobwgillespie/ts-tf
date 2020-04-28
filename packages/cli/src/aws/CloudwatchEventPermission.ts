import {Resource} from '../Resource'

export interface CloudwatchEventPermissionArguments {
  action?: string
  id?: string
  principal: string
  statement_id: string
}

export interface CloudwatchEventPermissionAttributes {
  action?: string
  id: string
  principal: string
  statement_id: string
}

export class CloudwatchEventPermission extends Resource<
  CloudwatchEventPermissionArguments,
  CloudwatchEventPermissionAttributes
> {
  _kind = 'aws_cloudwatch_event_permission'

  get action() {
    return this._attr('action')
  }

  get id() {
    return this._attr('id')
  }

  get principal() {
    return this._attr('principal')
  }

  get statement_id() {
    return this._attr('statement_id')
  }
}
