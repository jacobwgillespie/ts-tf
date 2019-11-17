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
  kind = 'aws_appsync_resolver'
  _outputAttrNames = [
    'api_id',
    'arn',
    'data_source',
    'field',
    'id',
    'kind',
    'request_template',
    'response_template',
    'type',
  ] as const
}
