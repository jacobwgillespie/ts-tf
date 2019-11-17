import {Resource} from '../Resource'

export interface SpotFleetRequestArguments {
  allocation_strategy?: string
  excess_capacity_termination_policy?: string
  fleet_type?: string
  iam_fleet_role: string
  id?: string
  instance_interruption_behaviour?: string
  instance_pools_to_use_count?: number
  load_balancers?: Set<string>
  replace_unhealthy_instances?: boolean
  spot_price?: string
  target_capacity: number
  target_group_arns?: Set<string>
  terminate_instances_with_expiration?: boolean
  valid_from?: string
  valid_until?: string
  wait_for_fulfillment?: boolean
}

export interface SpotFleetRequestAttributes {
  allocation_strategy?: string
  client_token: string
  excess_capacity_termination_policy?: string
  fleet_type?: string
  iam_fleet_role: string
  id: string
  instance_interruption_behaviour?: string
  instance_pools_to_use_count?: number
  load_balancers: Set<string>
  replace_unhealthy_instances?: boolean
  spot_price?: string
  spot_request_state: string
  target_capacity: number
  target_group_arns: Set<string>
  terminate_instances_with_expiration?: boolean
  valid_from?: string
  valid_until?: string
  wait_for_fulfillment?: boolean
}

export class SpotFleetRequest extends Resource<SpotFleetRequestArguments, SpotFleetRequestAttributes> {
  kind = 'aws_spot_fleet_request'
  _outputAttrNames = [
    'allocation_strategy',
    'client_token',
    'excess_capacity_termination_policy',
    'fleet_type',
    'iam_fleet_role',
    'id',
    'instance_interruption_behaviour',
    'instance_pools_to_use_count',
    'load_balancers',
    'replace_unhealthy_instances',
    'spot_price',
    'spot_request_state',
    'target_capacity',
    'target_group_arns',
    'terminate_instances_with_expiration',
    'valid_from',
    'valid_until',
    'wait_for_fulfillment',
  ] as const
}
