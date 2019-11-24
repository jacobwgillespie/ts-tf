import {Resource} from '../Resource'

export interface AutoscalingGroupArguments {
  availability_zones?: Set<string>
  default_cooldown?: number
  desired_capacity?: number
  enabled_metrics?: Set<string>
  force_delete?: boolean
  health_check_grace_period?: number
  health_check_type?: string
  id?: string
  launch_configuration?: string
  load_balancers?: Set<string>
  max_size: number
  metrics_granularity?: string
  min_elb_capacity?: number
  min_size: number
  name?: string
  name_prefix?: string
  placement_group?: string
  protect_from_scale_in?: boolean
  service_linked_role_arn?: string
  suspended_processes?: Set<string>
  tags?: Array<{[key: string]: string}>
  target_group_arns?: Set<string>
  termination_policies?: Array<string>
  vpc_zone_identifier?: Set<string>
  wait_for_capacity_timeout?: string
  wait_for_elb_capacity?: number
}

export interface AutoscalingGroupAttributes {
  arn: string
  availability_zones: Set<string>
  default_cooldown: number
  desired_capacity: number
  enabled_metrics?: Set<string>
  force_delete?: boolean
  health_check_grace_period?: number
  health_check_type: string
  id: string
  launch_configuration?: string
  load_balancers: Set<string>
  max_size: number
  metrics_granularity?: string
  min_elb_capacity?: number
  min_size: number
  name: string
  name_prefix?: string
  placement_group?: string
  protect_from_scale_in?: boolean
  service_linked_role_arn: string
  suspended_processes?: Set<string>
  tags?: Array<{[key: string]: string}>
  target_group_arns: Set<string>
  termination_policies?: Array<string>
  vpc_zone_identifier: Set<string>
  wait_for_capacity_timeout?: string
  wait_for_elb_capacity?: number
}

export class AutoscalingGroup extends Resource<AutoscalingGroupArguments, AutoscalingGroupAttributes> {
  _kind = 'aws_autoscaling_group'

  get arn() {
    return this._attr('arn')
  }

  get availability_zones() {
    return this._attr('availability_zones')
  }

  get default_cooldown() {
    return this._attr('default_cooldown')
  }

  get desired_capacity() {
    return this._attr('desired_capacity')
  }

  get enabled_metrics() {
    return this._attr('enabled_metrics')
  }

  get force_delete() {
    return this._attr('force_delete')
  }

  get health_check_grace_period() {
    return this._attr('health_check_grace_period')
  }

  get health_check_type() {
    return this._attr('health_check_type')
  }

  get id() {
    return this._attr('id')
  }

  get launch_configuration() {
    return this._attr('launch_configuration')
  }

  get load_balancers() {
    return this._attr('load_balancers')
  }

  get max_size() {
    return this._attr('max_size')
  }

  get metrics_granularity() {
    return this._attr('metrics_granularity')
  }

  get min_elb_capacity() {
    return this._attr('min_elb_capacity')
  }

  get min_size() {
    return this._attr('min_size')
  }

  get name() {
    return this._attr('name')
  }

  get name_prefix() {
    return this._attr('name_prefix')
  }

  get placement_group() {
    return this._attr('placement_group')
  }

  get protect_from_scale_in() {
    return this._attr('protect_from_scale_in')
  }

  get service_linked_role_arn() {
    return this._attr('service_linked_role_arn')
  }

  get suspended_processes() {
    return this._attr('suspended_processes')
  }

  get tags() {
    return this._attr('tags')
  }

  get target_group_arns() {
    return this._attr('target_group_arns')
  }

  get termination_policies() {
    return this._attr('termination_policies')
  }

  get vpc_zone_identifier() {
    return this._attr('vpc_zone_identifier')
  }

  get wait_for_capacity_timeout() {
    return this._attr('wait_for_capacity_timeout')
  }

  get wait_for_elb_capacity() {
    return this._attr('wait_for_elb_capacity')
  }
}
