import {Resource} from '../Resource'

export interface OpsworksGangliaLayerArguments {
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
  id?: string
  install_updates_on_boot?: boolean
  instance_shutdown_timeout?: number
  name?: string
  password: string
  stack_id: string
  system_packages?: Set<string>
  url?: string
  use_ebs_optimized_instances?: boolean
  username?: string
}

export interface OpsworksGangliaLayerAttributes {
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
  id: string
  install_updates_on_boot?: boolean
  instance_shutdown_timeout?: number
  name?: string
  password: string
  stack_id: string
  system_packages?: Set<string>
  url?: string
  use_ebs_optimized_instances?: boolean
  username?: string
}

export class OpsworksGangliaLayer extends Resource<OpsworksGangliaLayerArguments, OpsworksGangliaLayerAttributes> {
  kind = 'aws_opsworks_ganglia_layer'
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
    'id',
    'install_updates_on_boot',
    'instance_shutdown_timeout',
    'name',
    'password',
    'stack_id',
    'system_packages',
    'url',
    'use_ebs_optimized_instances',
    'username',
  ] as const
}
