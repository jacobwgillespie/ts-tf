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
  _kind = 'aws_ecr_repository'

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get image_tag_mutability() {
    return this._attr('image_tag_mutability')
  }

  get name() {
    return this._attr('name')
  }

  get registry_id() {
    return this._attr('registry_id')
  }

  get repository_url() {
    return this._attr('repository_url')
  }

  get tags() {
    return this._attr('tags')
  }
}
