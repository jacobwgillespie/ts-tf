import {Resource} from '../Resource'

export interface CodecommitRepositoryArguments {
  default_branch?: string
  description?: string
  id?: string
  repository_name: string
  tags?: {[key: string]: string}
}

export interface CodecommitRepositoryAttributes {
  arn: string
  clone_url_http: string
  clone_url_ssh: string
  default_branch?: string
  description?: string
  id: string
  repository_id: string
  repository_name: string
  tags?: {[key: string]: string}
}

export class CodecommitRepository extends Resource<CodecommitRepositoryArguments, CodecommitRepositoryAttributes> {
  kind = 'aws_codecommit_repository'
  _outputAttrNames = [
    'arn',
    'clone_url_http',
    'clone_url_ssh',
    'default_branch',
    'description',
    'id',
    'repository_id',
    'repository_name',
    'tags',
  ] as const
}
