import {Resource} from '../Resource'

export interface CloudformationStackSetArguments {
  administration_role_arn: string
  capabilities?: Set<string>
  description?: string
  execution_role_name?: string
  id?: string
  name: string
  parameters?: {[key: string]: string}
  tags?: {[key: string]: string}
  template_body?: string
  template_url?: string
}

export interface CloudformationStackSetAttributes {
  administration_role_arn: string
  arn: string
  capabilities?: Set<string>
  description?: string
  execution_role_name?: string
  id: string
  name: string
  parameters?: {[key: string]: string}
  stack_set_id: string
  tags?: {[key: string]: string}
  template_body: string
  template_url?: string
}

export class CloudformationStackSet extends Resource<
  CloudformationStackSetArguments,
  CloudformationStackSetAttributes
> {
  kind = 'aws_cloudformation_stack_set'
  _outputAttrNames = [
    'administration_role_arn',
    'arn',
    'capabilities',
    'description',
    'execution_role_name',
    'id',
    'name',
    'parameters',
    'stack_set_id',
    'tags',
    'template_body',
    'template_url',
  ] as const
}
