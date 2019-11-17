import {Resource} from '../Resource'

export interface OpsworksHaproxyLayerArguments {
  auto_assign_elastic_ips?: boolean
  auto_assign_public_ips?: boolean
  auto_healing?: boolean
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
  healthcheck_method?: string
  healthcheck_url?: string
  id?: string
  install_updates_on_boot?: boolean
  instance_shutdown_timeout?: number
  name?: string
  stack_id: string
  stats_enabled?: boolean
  stats_password: string
  stats_url?: string
  stats_user?: string
  system_packages?: Set<string>
  use_ebs_optimized_instances?: boolean
}

export interface OpsworksHaproxyLayerAttributes {
  auto_assign_elastic_ips?: boolean
  auto_assign_public_ips?: boolean
  auto_healing?: boolean
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
  healthcheck_method?: string
  healthcheck_url?: string
  id: string
  install_updates_on_boot?: boolean
  instance_shutdown_timeout?: number
  name?: string
  stack_id: string
  stats_enabled?: boolean
  stats_password: string
  stats_url?: string
  stats_user?: string
  system_packages?: Set<string>
  use_ebs_optimized_instances?: boolean
}

export class OpsworksHaproxyLayer extends Resource<OpsworksHaproxyLayerArguments, OpsworksHaproxyLayerAttributes> {
  kind = 'aws_opsworks_haproxy_layer'
  _outputAttrNames = [
    'auto_assign_elastic_ips',
    'auto_assign_public_ips',
    'auto_healing',
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
    'healthcheck_method',
    'healthcheck_url',
    'id',
    'install_updates_on_boot',
    'instance_shutdown_timeout',
    'name',
    'stack_id',
    'stats_enabled',
    'stats_password',
    'stats_url',
    'stats_user',
    'system_packages',
    'use_ebs_optimized_instances',
  ] as const
}
