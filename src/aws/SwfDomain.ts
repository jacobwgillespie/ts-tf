import {Resource} from '../Resource'

export interface SwfDomainArguments {
  description?: string
  id?: string
  name?: string
  name_prefix?: string
  workflow_execution_retention_period_in_days: string
}

export interface SwfDomainAttributes {
  description?: string
  id: string
  name: string
  name_prefix?: string
  workflow_execution_retention_period_in_days: string
}

export class SwfDomain extends Resource<SwfDomainArguments, SwfDomainAttributes> {
  kind = 'aws_swf_domain'
  _outputAttrNames = [
    'description',
    'id',
    'name',
    'name_prefix',
    'workflow_execution_retention_period_in_days',
  ] as const
}
