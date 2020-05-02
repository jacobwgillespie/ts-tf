import {Resource} from '../Resource'

export interface CloudwatchLogStreamArguments {
  id?: string
  log_group_name: string
  name: string
}

export interface CloudwatchLogStreamAttributes {
  arn: string
  id: string
  log_group_name: string
  name: string
}

export class CloudwatchLogStream extends Resource<CloudwatchLogStreamArguments, CloudwatchLogStreamAttributes> {
  _kind = 'aws_cloudwatch_log_stream'

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get log_group_name() {
    return this._attr('log_group_name')
  }

  get name() {
    return this._attr('name')
  }
}
