import {Resource} from '../Resource'

export interface CodepipelineArguments {
  id?: string
  name: string
  role_arn: string
  tags?: {[key: string]: string}
}

export interface CodepipelineAttributes {
  arn: string
  id: string
  name: string
  role_arn: string
  tags?: {[key: string]: string}
}

export class Codepipeline extends Resource<CodepipelineArguments, CodepipelineAttributes> {
  _kind = 'aws_codepipeline'

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get role_arn() {
    return this._attr('role_arn')
  }

  get tags() {
    return this._attr('tags')
  }
}
