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
  kind = 'aws_ec2_fleet'
  _outputAttrNames = [
    'excess_capacity_termination_policy',
    'id',
    'replace_unhealthy_instances',
    'tags',
    'terminate_instances',
    'terminate_instances_with_expiration',
    'type',
  ] as const
}
