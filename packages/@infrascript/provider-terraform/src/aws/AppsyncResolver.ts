import {Resource} from '../Resource'

export interface AppsyncResolverArguments {
  api_id: string
  data_source?: string
  field: string
  id?: string
  kind?: string
  request_template: string
  response_template: string
  type: string
}

export interface AppsyncResolverAttributes {
  api_id: string
  arn: string
  data_source?: string
  field: string
  id: string
  kind?: string
  request_template: string
  response_template: string
  type: string
}

export class AppsyncResolver extends Resource<AppsyncResolverArguments, AppsyncResolverAttributes> {
  _kind = 'aws_appsync_resolver'

  get api_id() {
    return this._attr('api_id')
  }

  get arn() {
    return this._attr('arn')
  }

  get data_source() {
    return this._attr('data_source')
  }

  get field() {
    return this._attr('field')
  }

  get id() {
    return this._attr('id')
  }

  get kind() {
    return this._attr('kind')
  }

  get request_template() {
    return this._attr('request_template')
  }

  get response_template() {
    return this._attr('response_template')
  }

  get type() {
    return this._attr('type')
  }
}
