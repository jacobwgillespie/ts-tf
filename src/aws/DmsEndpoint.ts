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
  kind = 'aws_dms_endpoint'
  _outputAttrNames = [
    'certificate_arn',
    'database_name',
    'endpoint_arn',
    'endpoint_id',
    'endpoint_type',
    'engine_name',
    'extra_connection_attributes',
    'id',
    'kms_key_arn',
    'password',
    'port',
    'server_name',
    'service_access_role',
    'ssl_mode',
    'tags',
    'username',
  ] as const
}
