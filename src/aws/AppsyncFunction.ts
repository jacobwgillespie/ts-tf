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
  kind = 'aws_appsync_function'
  _outputAttrNames = [
    'api_id',
    'arn',
    'data_source',
    'description',
    'function_id',
    'function_version',
    'id',
    'name',
    'request_mapping_template',
    'response_mapping_template',
  ] as const
}
