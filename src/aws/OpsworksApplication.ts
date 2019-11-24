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
  _kind = 'aws_opsworks_application'

  get auto_bundle_on_deploy() {
    return this._attr('auto_bundle_on_deploy')
  }

  get aws_flow_ruby_settings() {
    return this._attr('aws_flow_ruby_settings')
  }

  get data_source_arn() {
    return this._attr('data_source_arn')
  }

  get data_source_database_name() {
    return this._attr('data_source_database_name')
  }

  get data_source_type() {
    return this._attr('data_source_type')
  }

  get description() {
    return this._attr('description')
  }

  get document_root() {
    return this._attr('document_root')
  }

  get domains() {
    return this._attr('domains')
  }

  get enable_ssl() {
    return this._attr('enable_ssl')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get rails_env() {
    return this._attr('rails_env')
  }

  get short_name() {
    return this._attr('short_name')
  }

  get stack_id() {
    return this._attr('stack_id')
  }

  get type() {
    return this._attr('type')
  }
}
