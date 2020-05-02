import {Resource} from '../Resource'

export interface DmsEndpointArguments {
  certificate_arn?: string
  database_name?: string
  endpoint_id: string
  endpoint_type: string
  engine_name: string
  extra_connection_attributes?: string
  id?: string
  kms_key_arn?: string
  password?: string
  port?: number
  server_name?: string
  service_access_role?: string
  ssl_mode?: string
  tags?: {[key: string]: string}
  username?: string
}

export interface DmsEndpointAttributes {
  certificate_arn: string
  database_name?: string
  endpoint_arn: string
  endpoint_id: string
  endpoint_type: string
  engine_name: string
  extra_connection_attributes: string
  id: string
  kms_key_arn: string
  password?: string
  port?: number
  server_name?: string
  service_access_role?: string
  ssl_mode: string
  tags?: {[key: string]: string}
  username?: string
}

export class DmsEndpoint extends Resource<DmsEndpointArguments, DmsEndpointAttributes> {
  _kind = 'aws_dms_endpoint'

  get certificate_arn() {
    return this._attr('certificate_arn')
  }

  get database_name() {
    return this._attr('database_name')
  }

  get endpoint_arn() {
    return this._attr('endpoint_arn')
  }

  get endpoint_id() {
    return this._attr('endpoint_id')
  }

  get endpoint_type() {
    return this._attr('endpoint_type')
  }

  get engine_name() {
    return this._attr('engine_name')
  }

  get extra_connection_attributes() {
    return this._attr('extra_connection_attributes')
  }

  get id() {
    return this._attr('id')
  }

  get kms_key_arn() {
    return this._attr('kms_key_arn')
  }

  get password() {
    return this._attr('password')
  }

  get port() {
    return this._attr('port')
  }

  get server_name() {
    return this._attr('server_name')
  }

  get service_access_role() {
    return this._attr('service_access_role')
  }

  get ssl_mode() {
    return this._attr('ssl_mode')
  }

  get tags() {
    return this._attr('tags')
  }

  get username() {
    return this._attr('username')
  }
}
