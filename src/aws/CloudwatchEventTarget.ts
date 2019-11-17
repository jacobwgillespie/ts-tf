import {Resource} from '../Resource'

export interface CloudwatchEventTargetArguments {
  arn: string
  id?: string
  input?: string
  input_path?: string
  role_arn?: string
  rule: string
  target_id?: string
}

export interface CloudwatchEventTargetAttributes {
  arn: string
  id: string
  input?: string
  input_path?: string
  role_arn?: string
  rule: string
  target_id: string
}

export class CloudwatchEventTarget extends Resource<CloudwatchEventTargetArguments, CloudwatchEventTargetAttributes> {
  kind = 'aws_cloudwatch_event_target'
  _outputAttrNames = ['arn', 'id', 'input', 'input_path', 'role_arn', 'rule', 'target_id'] as const
}
