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
  kind = 'aws_opsworks_stack'
  _outputAttrNames = [
    'agent_version',
    'arn',
    'berkshelf_version',
    'color',
    'configuration_manager_name',
    'configuration_manager_version',
    'custom_json',
    'default_availability_zone',
    'default_instance_profile_arn',
    'default_os',
    'default_root_device_type',
    'default_ssh_key_name',
    'default_subnet_id',
    'hostname_theme',
    'id',
    'manage_berkshelf',
    'name',
    'region',
    'service_role_arn',
    'stack_endpoint',
    'tags',
    'use_custom_cookbooks',
    'use_opsworks_security_groups',
    'vpc_id',
  ] as const
}
