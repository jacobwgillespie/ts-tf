import {Resource} from '../Resource'

export interface OpsworksApplicationArguments {
  auto_bundle_on_deploy?: string
  aws_flow_ruby_settings?: string
  data_source_arn?: string
  data_source_database_name?: string
  data_source_type?: string
  description?: string
  document_root?: string
  domains?: Array<string>
  enable_ssl?: boolean
  id?: string
  name: string
  rails_env?: string
  short_name?: string
  stack_id: string
  type: string
}

export interface OpsworksApplicationAttributes {
  auto_bundle_on_deploy?: string
  aws_flow_ruby_settings?: string
  data_source_arn?: string
  data_source_database_name?: string
  data_source_type?: string
  description?: string
  document_root?: string
  domains?: Array<string>
  enable_ssl?: boolean
  id: string
  name: string
  rails_env?: string
  short_name: string
  stack_id: string
  type: string
}

export class OpsworksApplication extends Resource<OpsworksApplicationArguments, OpsworksApplicationAttributes> {
  kind = 'aws_opsworks_application'
  _outputAttrNames = [
    'auto_bundle_on_deploy',
    'aws_flow_ruby_settings',
    'data_source_arn',
    'data_source_database_name',
    'data_source_type',
    'description',
    'document_root',
    'domains',
    'enable_ssl',
    'id',
    'name',
    'rails_env',
    'short_name',
    'stack_id',
    'type',
  ] as const
}
