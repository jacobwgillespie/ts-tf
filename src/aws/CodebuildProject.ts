import {Resource} from '../Resource'

export interface CodebuildProjectArguments {
  badge_enabled?: boolean
  build_timeout?: number
  description?: string
  encryption_key?: string
  id?: string
  name: string
  service_role: string
  tags?: {[key: string]: string}
}

export interface CodebuildProjectAttributes {
  arn: string
  badge_enabled?: boolean
  badge_url: string
  build_timeout?: number
  description: string
  encryption_key: string
  id: string
  name: string
  service_role: string
  tags?: {[key: string]: string}
}

export class CodebuildProject extends Resource<CodebuildProjectArguments, CodebuildProjectAttributes> {
  _kind = 'aws_codebuild_project'

  get arn() {
    return this._attr('arn')
  }

  get badge_enabled() {
    return this._attr('badge_enabled')
  }

  get badge_url() {
    return this._attr('badge_url')
  }

  get build_timeout() {
    return this._attr('build_timeout')
  }

  get description() {
    return this._attr('description')
  }

  get encryption_key() {
    return this._attr('encryption_key')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get service_role() {
    return this._attr('service_role')
  }

  get tags() {
    return this._attr('tags')
  }
}
