import {Resource} from '../Resource'

export interface CloudformationStackArguments {
  capabilities?: Set<string>
  disable_rollback?: boolean
  iam_role_arn?: string
  id?: string
  name: string
  notification_arns?: Set<string>
  on_failure?: string
  parameters?: {[key: string]: string}
  policy_body?: string
  policy_url?: string
  tags?: {[key: string]: string}
  template_body?: string
  template_url?: string
  timeout_in_minutes?: number
}

export interface CloudformationStackAttributes {
  capabilities?: Set<string>
  disable_rollback?: boolean
  iam_role_arn?: string
  id: string
  name: string
  notification_arns?: Set<string>
  on_failure?: string
  outputs: {[key: string]: string}
  parameters: {[key: string]: string}
  policy_body: string
  policy_url?: string
  tags?: {[key: string]: string}
  template_body: string
  template_url?: string
  timeout_in_minutes?: number
}

export class CloudformationStack extends Resource<CloudformationStackArguments, CloudformationStackAttributes> {
  kind = 'aws_cloudformation_stack'
  _outputAttrNames = [
    'capabilities',
    'disable_rollback',
    'iam_role_arn',
    'id',
    'name',
    'notification_arns',
    'on_failure',
    'outputs',
    'parameters',
    'policy_body',
    'policy_url',
    'tags',
    'template_body',
    'template_url',
    'timeout_in_minutes',
  ] as const
}
