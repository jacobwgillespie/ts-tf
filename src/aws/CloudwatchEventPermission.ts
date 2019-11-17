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
  kind = 'aws_cloudwatch_event_permission'
  _outputAttrNames = ['action', 'id', 'principal', 'statement_id'] as const
}
