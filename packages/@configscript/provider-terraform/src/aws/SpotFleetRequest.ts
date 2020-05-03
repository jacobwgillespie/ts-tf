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
  _kind = 'aws_spot_fleet_request'

  get allocation_strategy() {
    return this._attr('allocation_strategy')
  }

  get client_token() {
    return this._attr('client_token')
  }

  get excess_capacity_termination_policy() {
    return this._attr('excess_capacity_termination_policy')
  }

  get fleet_type() {
    return this._attr('fleet_type')
  }

  get iam_fleet_role() {
    return this._attr('iam_fleet_role')
  }

  get id() {
    return this._attr('id')
  }

  get instance_interruption_behaviour() {
    return this._attr('instance_interruption_behaviour')
  }

  get instance_pools_to_use_count() {
    return this._attr('instance_pools_to_use_count')
  }

  get load_balancers() {
    return this._attr('load_balancers')
  }

  get replace_unhealthy_instances() {
    return this._attr('replace_unhealthy_instances')
  }

  get spot_price() {
    return this._attr('spot_price')
  }

  get spot_request_state() {
    return this._attr('spot_request_state')
  }

  get target_capacity() {
    return this._attr('target_capacity')
  }

  get target_group_arns() {
    return this._attr('target_group_arns')
  }

  get terminate_instances_with_expiration() {
    return this._attr('terminate_instances_with_expiration')
  }

  get valid_from() {
    return this._attr('valid_from')
  }

  get valid_until() {
    return this._attr('valid_until')
  }

  get wait_for_fulfillment() {
    return this._attr('wait_for_fulfillment')
  }
}
