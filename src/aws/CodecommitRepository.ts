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
  _kind = 'aws_codecommit_repository'

  get arn() {
    return this._attr('arn')
  }

  get clone_url_http() {
    return this._attr('clone_url_http')
  }

  get clone_url_ssh() {
    return this._attr('clone_url_ssh')
  }

  get default_branch() {
    return this._attr('default_branch')
  }

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get repository_id() {
    return this._attr('repository_id')
  }

  get repository_name() {
    return this._attr('repository_name')
  }

  get tags() {
    return this._attr('tags')
  }
}
