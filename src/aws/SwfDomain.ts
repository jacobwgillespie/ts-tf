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
  _kind = 'aws_swf_domain'

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get name_prefix() {
    return this._attr('name_prefix')
  }

  get workflow_execution_retention_period_in_days() {
    return this._attr('workflow_execution_retention_period_in_days')
  }
}
