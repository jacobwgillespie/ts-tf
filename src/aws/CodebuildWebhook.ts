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
  _kind = 'aws_codebuild_webhook'

  get branch_filter() {
    return this._attr('branch_filter')
  }

  get id() {
    return this._attr('id')
  }

  get payload_url() {
    return this._attr('payload_url')
  }

  get project_name() {
    return this._attr('project_name')
  }

  get secret() {
    return this._attr('secret')
  }

  get url() {
    return this._attr('url')
  }
}
