import {Resource} from '../Resource'

export interface CodepipelineWebhookArguments {
  authentication: string
  id?: string
  name: string
  tags?: {[key: string]: string}
  target_action: string
  target_pipeline: string
}

export interface CodepipelineWebhookAttributes {
  authentication: string
  id: string
  name: string
  tags?: {[key: string]: string}
  target_action: string
  target_pipeline: string
  url: string
}

export class CodepipelineWebhook extends Resource<CodepipelineWebhookArguments, CodepipelineWebhookAttributes> {
  _kind = 'aws_codepipeline_webhook'

  get authentication() {
    return this._attr('authentication')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get tags() {
    return this._attr('tags')
  }

  get target_action() {
    return this._attr('target_action')
  }

  get target_pipeline() {
    return this._attr('target_pipeline')
  }

  get url() {
    return this._attr('url')
  }
}
