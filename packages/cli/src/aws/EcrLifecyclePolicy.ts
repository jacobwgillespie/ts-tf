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
  _kind = 'aws_ecr_lifecycle_policy'

  get id() {
    return this._attr('id')
  }

  get policy() {
    return this._attr('policy')
  }

  get registry_id() {
    return this._attr('registry_id')
  }

  get repository() {
    return this._attr('repository')
  }
}
