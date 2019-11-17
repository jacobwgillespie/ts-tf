import {Resource} from '../Resource'

export interface AppsyncDatasourceArguments {
  api_id: string
  description?: string
  id?: string
  name: string
  service_role_arn?: string
  type: string
}

export interface AppsyncDatasourceAttributes {
  api_id: string
  arn: string
  description?: string
  id: string
  name: string
  service_role_arn?: string
  type: string
}

export class AppsyncDatasource extends Resource<AppsyncDatasourceArguments, AppsyncDatasourceAttributes> {
  kind = 'aws_appsync_datasource'
  _outputAttrNames = ['api_id', 'arn', 'description', 'id', 'name', 'service_role_arn', 'type'] as const
}
