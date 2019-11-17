import {Resource} from '../Resource'

export interface EcrLifecyclePolicyArguments {
  id?: string
  policy: string
  repository: string
}

export interface EcrLifecyclePolicyAttributes {
  id: string
  policy: string
  registry_id: string
  repository: string
}

export class EcrLifecyclePolicy extends Resource<EcrLifecyclePolicyArguments, EcrLifecyclePolicyAttributes> {
  kind = 'aws_ecr_lifecycle_policy'
  _outputAttrNames = ['id', 'policy', 'registry_id', 'repository'] as const
}
