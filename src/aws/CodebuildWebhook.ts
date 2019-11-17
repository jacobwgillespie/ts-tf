import {Resource} from '../Resource'

export interface CodebuildWebhookArguments {
  branch_filter?: string
  id?: string
  project_name: string
}

export interface CodebuildWebhookAttributes {
  branch_filter?: string
  id: string
  payload_url: string
  project_name: string
  secret: string
  url: string
}

export class CodebuildWebhook extends Resource<CodebuildWebhookArguments, CodebuildWebhookAttributes> {
  kind = 'aws_codebuild_webhook'
  _outputAttrNames = ['branch_filter', 'id', 'payload_url', 'project_name', 'secret', 'url'] as const
}
