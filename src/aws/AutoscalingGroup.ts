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
  kind = 'aws_autoscaling_group'
  _outputAttrNames = [
    'arn',
    'availability_zones',
    'default_cooldown',
    'desired_capacity',
    'enabled_metrics',
    'force_delete',
    'health_check_grace_period',
    'health_check_type',
    'id',
    'launch_configuration',
    'load_balancers',
    'max_size',
    'metrics_granularity',
    'min_elb_capacity',
    'min_size',
    'name',
    'name_prefix',
    'placement_group',
    'protect_from_scale_in',
    'service_linked_role_arn',
    'suspended_processes',
    'tags',
    'target_group_arns',
    'termination_policies',
    'vpc_zone_identifier',
    'wait_for_capacity_timeout',
    'wait_for_elb_capacity',
  ] as const
}
