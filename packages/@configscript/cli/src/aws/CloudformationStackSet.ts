import {Resource} from '../Resource'

export interface CloudformationStackSetArguments {
  administration_role_arn: string
  capabilities?: Set<string>
  description?: string
  execution_role_name?: string
  id?: string
  name: string
  parameters?: {[key: string]: string}
  tags?: {[key: string]: string}
  template_body?: string
  template_url?: string
}

export interface CloudformationStackSetAttributes {
  administration_role_arn: string
  arn: string
  capabilities?: Set<string>
  description?: string
  execution_role_name?: string
  id: string
  name: string
  parameters?: {[key: string]: string}
  stack_set_id: string
  tags?: {[key: string]: string}
  template_body: string
  template_url?: string
}

export class CloudformationStackSet extends Resource<
  CloudformationStackSetArguments,
  CloudformationStackSetAttributes
> {
  _kind = 'aws_cloudformation_stack_set'

  get administration_role_arn() {
    return this._attr('administration_role_arn')
  }

  get arn() {
    return this._attr('arn')
  }

  get capabilities() {
    return this._attr('capabilities')
  }

  get description() {
    return this._attr('description')
  }

  get execution_role_name() {
    return this._attr('execution_role_name')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get parameters() {
    return this._attr('parameters')
  }

  get stack_set_id() {
    return this._attr('stack_set_id')
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
}
