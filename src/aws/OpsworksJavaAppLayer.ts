import {Resource} from '../Resource'

export interface OpsworksJavaAppLayerArguments {
  app_server?: string
  app_server_version?: string
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
  jvm_options?: string
  jvm_type?: string
  jvm_version?: string
  name?: string
  stack_id: string
  system_packages?: Set<string>
  use_ebs_optimized_instances?: boolean
}

export interface OpsworksJavaAppLayerAttributes {
  app_server?: string
  app_server_version?: string
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
  jvm_options?: string
  jvm_type?: string
  jvm_version?: string
  name?: string
  stack_id: string
  system_packages?: Set<string>
  use_ebs_optimized_instances?: boolean
}

export class OpsworksJavaAppLayer extends Resource<OpsworksJavaAppLayerArguments, OpsworksJavaAppLayerAttributes> {
  kind = 'aws_opsworks_java_app_layer'
  _outputAttrNames = [
    'app_server',
    'app_server_version',
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
    'jvm_options',
    'jvm_type',
    'jvm_version',
    'name',
    'stack_id',
    'system_packages',
    'use_ebs_optimized_instances',
  ] as const
}
