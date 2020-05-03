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
  _kind = 'aws_opsworks_rails_app_layer'

  get app_server() {
    return this._attr('app_server')
  }

  get auto_assign_elastic_ips() {
    return this._attr('auto_assign_elastic_ips')
  }

  get auto_assign_public_ips() {
    return this._attr('auto_assign_public_ips')
  }

  get auto_healing() {
    return this._attr('auto_healing')
  }

  get bundler_version() {
    return this._attr('bundler_version')
  }

  get custom_configure_recipes() {
    return this._attr('custom_configure_recipes')
  }

  get custom_deploy_recipes() {
    return this._attr('custom_deploy_recipes')
  }

  get custom_instance_profile_arn() {
    return this._attr('custom_instance_profile_arn')
  }

  get custom_json() {
    return this._attr('custom_json')
  }

  get custom_security_group_ids() {
    return this._attr('custom_security_group_ids')
  }

  get custom_setup_recipes() {
    return this._attr('custom_setup_recipes')
  }

  get custom_shutdown_recipes() {
    return this._attr('custom_shutdown_recipes')
  }

  get custom_undeploy_recipes() {
    return this._attr('custom_undeploy_recipes')
  }

  get drain_elb_on_shutdown() {
    return this._attr('drain_elb_on_shutdown')
  }

  get elastic_load_balancer() {
    return this._attr('elastic_load_balancer')
  }

  get id() {
    return this._attr('id')
  }

  get install_updates_on_boot() {
    return this._attr('install_updates_on_boot')
  }

  get instance_shutdown_timeout() {
    return this._attr('instance_shutdown_timeout')
  }

  get manage_bundler() {
    return this._attr('manage_bundler')
  }

  get name() {
    return this._attr('name')
  }

  get passenger_version() {
    return this._attr('passenger_version')
  }

  get ruby_version() {
    return this._attr('ruby_version')
  }

  get rubygems_version() {
    return this._attr('rubygems_version')
  }

  get stack_id() {
    return this._attr('stack_id')
  }

  get system_packages() {
    return this._attr('system_packages')
  }

  get use_ebs_optimized_instances() {
    return this._attr('use_ebs_optimized_instances')
  }
}
