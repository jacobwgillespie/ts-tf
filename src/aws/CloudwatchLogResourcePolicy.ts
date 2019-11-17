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
  kind = 'aws_cloudwatch_log_resource_policy'
  _outputAttrNames = ['id', 'policy_document', 'policy_name'] as const
}
