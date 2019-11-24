import {Resource} from '../Resource'

export interface CloudwatchLogDestinationArguments {
  id?: string
  name: string
  role_arn: string
  target_arn: string
}

export interface CloudwatchLogDestinationAttributes {
  arn: string
  id: string
  name: string
  role_arn: string
  target_arn: string
}

export class CloudwatchLogDestination extends Resource<
  CloudwatchLogDestinationArguments,
  CloudwatchLogDestinationAttributes
> {
  _kind = 'aws_cloudwatch_log_destination'

  get arn() {
    return this._attr('arn')
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

  get target_arn() {
    return this._attr('target_arn')
  }
}
