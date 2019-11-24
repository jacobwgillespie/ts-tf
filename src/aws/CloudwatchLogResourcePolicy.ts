import {Resource} from '../Resource'

export interface CloudwatchLogResourcePolicyArguments {
  id?: string
  policy_document: string
  policy_name: string
}

export interface CloudwatchLogResourcePolicyAttributes {
  id: string
  policy_document: string
  policy_name: string
}

export class CloudwatchLogResourcePolicy extends Resource<
  CloudwatchLogResourcePolicyArguments,
  CloudwatchLogResourcePolicyAttributes
> {
  _kind = 'aws_cloudwatch_log_resource_policy'

  get id() {
    return this._attr('id')
  }

  get policy_document() {
    return this._attr('policy_document')
  }

  get policy_name() {
    return this._attr('policy_name')
  }
}
