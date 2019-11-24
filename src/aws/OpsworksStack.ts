import {Resource} from '../Resource'

export interface OpsworksStackArguments {
  agent_version?: string
  berkshelf_version?: string
  color?: string
  configuration_manager_name?: string
  configuration_manager_version?: string
  custom_json?: string
  default_availability_zone?: string
  default_instance_profile_arn: string
  default_os?: string
  default_root_device_type?: string
  default_ssh_key_name?: string
  default_subnet_id?: string
  hostname_theme?: string
  id?: string
  manage_berkshelf?: boolean
  name: string
  region: string
  service_role_arn: string
  tags?: {[key: string]: string}
  use_custom_cookbooks?: boolean
  use_opsworks_security_groups?: boolean
  vpc_id?: string
}

export interface OpsworksStackAttributes {
  agent_version: string
  arn: string
  berkshelf_version?: string
  color?: string
  configuration_manager_name?: string
  configuration_manager_version?: string
  custom_json?: string
  default_availability_zone: string
  default_instance_profile_arn: string
  default_os?: string
  default_root_device_type?: string
  default_ssh_key_name?: string
  default_subnet_id: string
  hostname_theme?: string
  id: string
  manage_berkshelf?: boolean
  name: string
  region: string
  service_role_arn: string
  stack_endpoint: string
  tags?: {[key: string]: string}
  use_custom_cookbooks?: boolean
  use_opsworks_security_groups?: boolean
  vpc_id: string
}

export class OpsworksStack extends Resource<OpsworksStackArguments, OpsworksStackAttributes> {
  _kind = 'aws_opsworks_stack'

  get agent_version() {
    return this._attr('agent_version')
  }

  get arn() {
    return this._attr('arn')
  }

  get berkshelf_version() {
    return this._attr('berkshelf_version')
  }

  get color() {
    return this._attr('color')
  }

  get configuration_manager_name() {
    return this._attr('configuration_manager_name')
  }

  get configuration_manager_version() {
    return this._attr('configuration_manager_version')
  }

  get custom_json() {
    return this._attr('custom_json')
  }

  get default_availability_zone() {
    return this._attr('default_availability_zone')
  }

  get default_instance_profile_arn() {
    return this._attr('default_instance_profile_arn')
  }

  get default_os() {
    return this._attr('default_os')
  }

  get default_root_device_type() {
    return this._attr('default_root_device_type')
  }

  get default_ssh_key_name() {
    return this._attr('default_ssh_key_name')
  }

  get default_subnet_id() {
    return this._attr('default_subnet_id')
  }

  get hostname_theme() {
    return this._attr('hostname_theme')
  }

  get id() {
    return this._attr('id')
  }

  get manage_berkshelf() {
    return this._attr('manage_berkshelf')
  }

  get name() {
    return this._attr('name')
  }

  get region() {
    return this._attr('region')
  }

  get service_role_arn() {
    return this._attr('service_role_arn')
  }

  get stack_endpoint() {
    return this._attr('stack_endpoint')
  }

  get tags() {
    return this._attr('tags')
  }

  get use_custom_cookbooks() {
    return this._attr('use_custom_cookbooks')
  }

  get use_opsworks_security_groups() {
    return this._attr('use_opsworks_security_groups')
  }

  get vpc_id() {
    return this._attr('vpc_id')
  }
}
