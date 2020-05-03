import {Resource} from '../Resource'

export interface EcrRepositoryPolicyArguments {
  id?: string
  policy: string
  repository: string
}

export interface EcrRepositoryPolicyAttributes {
  id: string
  policy: string
  registry_id: string
  repository: string
}

export class EcrRepositoryPolicy extends Resource<EcrRepositoryPolicyArguments, EcrRepositoryPolicyAttributes> {
  _kind = 'aws_ecr_repository_policy'

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
