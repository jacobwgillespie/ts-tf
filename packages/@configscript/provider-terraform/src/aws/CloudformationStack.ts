import {Resource} from '../Resource'

export interface CloudformationStackArguments {
  capabilities?: Set<string>
  disable_rollback?: boolean
  iam_role_arn?: string
  id?: string
  name: string
  notification_arns?: Set<string>
  on_failure?: string
  parameters?: {[key: string]: string}
  policy_body?: string
  policy_url?: string
  tags?: {[key: string]: string}
  template_body?: string
  template_url?: string
  timeout_in_minutes?: number
}

export interface CloudformationStackAttributes {
  capabilities?: Set<string>
  disable_rollback?: boolean
  iam_role_arn?: string
  id: string
  name: string
  notification_arns?: Set<string>
  on_failure?: string
  outputs: {[key: string]: string}
  parameters: {[key: string]: string}
  policy_body: string
  policy_url?: string
  tags?: {[key: string]: string}
  template_body: string
  template_url?: string
  timeout_in_minutes?: number
}

export class CloudformationStack extends Resource<CloudformationStackArguments, CloudformationStackAttributes> {
  _kind = 'aws_cloudformation_stack'

  get capabilities() {
    return this._attr('capabilities')
  }

  get disable_rollback() {
    return this._attr('disable_rollback')
  }

  get iam_role_arn() {
    return this._attr('iam_role_arn')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get notification_arns() {
    return this._attr('notification_arns')
  }

  get on_failure() {
    return this._attr('on_failure')
  }

  get outputs() {
    return this._attr('outputs')
  }

  get parameters() {
    return this._attr('parameters')
  }

  get policy_body() {
    return this._attr('policy_body')
  }

  get policy_url() {
    return this._attr('policy_url')
  }

  get tags() {
    return this._attr('tags')
  }

  get template_body() {
    return this._attr('template_body')
  }

  get template_url() {
    return this._attr('template_url')
  }

  get timeout_in_minutes() {
    return this._attr('timeout_in_minutes')
  }
}
