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
  kind = 'aws_dlm_lifecycle_policy'
  _outputAttrNames = ['description', 'execution_role_arn', 'id', 'state'] as const
}
