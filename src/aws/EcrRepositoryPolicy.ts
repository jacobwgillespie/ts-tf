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
  kind = 'aws_ecr_repository_policy'
  _outputAttrNames = ['id', 'policy', 'registry_id', 'repository'] as const
}
