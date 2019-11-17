import {Resource} from '../Resource'

export interface OpsworksRailsAppLayerArguments {
  app_server?: string
  auto_assign_elastic_ips?: boolean
  auto_assign_public_ips?: boolean
  auto_healing?: boolean
  bundler_version?: string
  custom_configure_recipes?: Array<string>
  custom_deploy_recipes?: Array<string>
  custom_instance_profile_arn?: string
  custom_json?: string
  custom_security_group_ids?: Set<string>
  custom_setup_recipes?: Array<string>
  custom_shutdown_recipes?: Array<string>
  custom_undeploy_recipes?: Array<string>
  drain_elb_on_shutdown?: boolean
  elastic_load_balancer?: string
  id?: string
  install_updates_on_boot?: boolean
  instance_shutdown_timeout?: number
  manage_bundler?: boolean
  name?: string
  passenger_version?: string
  ruby_version?: string
  rubygems_version?: string
  stack_id: string
  system_packages?: Set<string>
  use_ebs_optimized_instances?: boolean
}

export interface OpsworksRailsAppLayerAttributes {
  app_server?: string
  auto_assign_elastic_ips?: boolean
  auto_assign_public_ips?: boolean
  auto_healing?: boolean
  bundler_version?: string
  custom_configure_recipes?: Array<string>
  custom_deploy_recipes?: Array<string>
  custom_instance_profile_arn?: string
  custom_json?: string
  custom_security_group_ids?: Set<string>
  custom_setup_recipes?: Array<string>
  custom_shutdown_recipes?: Array<string>
  custom_undeploy_recipes?: Array<string>
  drain_elb_on_shutdown?: boolean
  elastic_load_balancer?: string
  id: string
  install_updates_on_boot?: boolean
  instance_shutdown_timeout?: number
  manage_bundler?: boolean
  name?: string
  passenger_version?: string
  ruby_version?: string
  rubygems_version?: string
  stack_id: string
  system_packages?: Set<string>
  use_ebs_optimized_instances?: boolean
}

export class OpsworksRailsAppLayer extends Resource<OpsworksRailsAppLayerArguments, OpsworksRailsAppLayerAttributes> {
  kind = 'aws_opsworks_rails_app_layer'
  _outputAttrNames = [
    'app_server',
    'auto_assign_elastic_ips',
    'auto_assign_public_ips',
    'auto_healing',
    'bundler_version',
    'custom_configure_recipes',
    'custom_deploy_recipes',
    'custom_instance_profile_arn',
    'custom_json',
    'custom_security_group_ids',
    'custom_setup_recipes',
    'custom_shutdown_recipes',
    'custom_undeploy_recipes',
    'drain_elb_on_shutdown',
    'elastic_load_balancer',
    'id',
    'install_updates_on_boot',
    'instance_shutdown_timeout',
    'manage_bundler',
    'name',
    'passenger_version',
    'ruby_version',
    'rubygems_version',
    'stack_id',
    'system_packages',
    'use_ebs_optimized_instances',
  ] as const
}
