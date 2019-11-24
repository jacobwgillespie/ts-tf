import {Resource} from '../Resource'

export interface DlmLifecyclePolicyArguments {
  description: string
  execution_role_arn: string
  id?: string
  state?: string
}

export interface DlmLifecyclePolicyAttributes {
  description: string
  execution_role_arn: string
  id: string
  state?: string
}

export class DlmLifecyclePolicy extends Resource<DlmLifecyclePolicyArguments, DlmLifecyclePolicyAttributes> {
  _kind = 'aws_dlm_lifecycle_policy'

  get description() {
    return this._attr('description')
  }

  get execution_role_arn() {
    return this._attr('execution_role_arn')
  }

  get id() {
    return this._attr('id')
  }

  get state() {
    return this._attr('state')
  }
}
