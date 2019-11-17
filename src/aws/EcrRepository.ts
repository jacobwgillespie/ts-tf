import {Resource} from '../Resource'

export interface EcrRepositoryArguments {
  id?: string
  image_tag_mutability?: string
  name: string
  tags?: {[key: string]: string}
}

export interface EcrRepositoryAttributes {
  arn: string
  id: string
  image_tag_mutability?: string
  name: string
  registry_id: string
  repository_url: string
  tags?: {[key: string]: string}
}

export class EcrRepository extends Resource<EcrRepositoryArguments, EcrRepositoryAttributes> {
  kind = 'aws_ecr_repository'
  _outputAttrNames = ['arn', 'id', 'image_tag_mutability', 'name', 'registry_id', 'repository_url', 'tags'] as const
}
