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
  _kind = 'aws_appsync_datasource'

  get api_id() {
    return this._attr('api_id')
  }

  get arn() {
    return this._attr('arn')
  }

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get service_role_arn() {
    return this._attr('service_role_arn')
  }

  get type() {
    return this._attr('type')
  }
}
