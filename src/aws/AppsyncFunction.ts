import {Resource} from '../Resource'

export interface AppsyncFunctionArguments {
  api_id: string
  data_source: string
  description?: string
  function_version?: string
  id?: string
  name: string
  request_mapping_template: string
  response_mapping_template: string
}

export interface AppsyncFunctionAttributes {
  api_id: string
  arn: string
  data_source: string
  description?: string
  function_id: string
  function_version?: string
  id: string
  name: string
  request_mapping_template: string
  response_mapping_template: string
}

export class AppsyncFunction extends Resource<AppsyncFunctionArguments, AppsyncFunctionAttributes> {
  _kind = 'aws_appsync_function'

  get api_id() {
    return this._attr('api_id')
  }

  get arn() {
    return this._attr('arn')
  }

  get data_source() {
    return this._attr('data_source')
  }

  get description() {
    return this._attr('description')
  }

  get function_id() {
    return this._attr('function_id')
  }

  get function_version() {
    return this._attr('function_version')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get request_mapping_template() {
    return this._attr('request_mapping_template')
  }

  get response_mapping_template() {
    return this._attr('response_mapping_template')
  }
}
