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
  kind = 'aws_codepipeline_webhook'
  _outputAttrNames = ['authentication', 'id', 'name', 'tags', 'target_action', 'target_pipeline', 'url'] as const
}
