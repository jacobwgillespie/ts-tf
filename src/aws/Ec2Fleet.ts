import {Resource} from '../Resource'

export interface Ec2FleetArguments {
  excess_capacity_termination_policy?: string
  id?: string
  replace_unhealthy_instances?: boolean
  tags?: {[key: string]: string}
  terminate_instances?: boolean
  terminate_instances_with_expiration?: boolean
  type?: string
}

export interface Ec2FleetAttributes {
  excess_capacity_termination_policy?: string
  id: string
  replace_unhealthy_instances?: boolean
  tags?: {[key: string]: string}
  terminate_instances?: boolean
  terminate_instances_with_expiration?: boolean
  type?: string
}

export class Ec2Fleet extends Resource<Ec2FleetArguments, Ec2FleetAttributes> {
  _kind = 'aws_ec2_fleet'

  get excess_capacity_termination_policy() {
    return this._attr('excess_capacity_termination_policy')
  }

  get id() {
    return this._attr('id')
  }

  get replace_unhealthy_instances() {
    return this._attr('replace_unhealthy_instances')
  }

  get tags() {
    return this._attr('tags')
  }

  get terminate_instances() {
    return this._attr('terminate_instances')
  }

  get terminate_instances_with_expiration() {
    return this._attr('terminate_instances_with_expiration')
  }

  get type() {
    return this._attr('type')
  }
}
