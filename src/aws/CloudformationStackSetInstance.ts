import {Resource} from '../Resource'

export interface CloudformationStackSetInstanceArguments {
  account_id?: string
  id?: string
  parameter_overrides?: {[key: string]: string}
  region?: string
  retain_stack?: boolean
  stack_set_name: string
}

export interface CloudformationStackSetInstanceAttributes {
  account_id: string
  id: string
  parameter_overrides?: {[key: string]: string}
  region: string
  retain_stack?: boolean
  stack_id: string
  stack_set_name: string
}

export class CloudformationStackSetInstance extends Resource<
  CloudformationStackSetInstanceArguments,
  CloudformationStackSetInstanceAttributes
> {
  kind = 'aws_cloudformation_stack_set_instance'
  _outputAttrNames = [
    'account_id',
    'id',
    'parameter_overrides',
    'region',
    'retain_stack',
    'stack_id',
    'stack_set_name',
  ] as const
}
