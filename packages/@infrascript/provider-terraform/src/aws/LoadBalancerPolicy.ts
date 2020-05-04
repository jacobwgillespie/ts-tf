import {Resource} from '../Resource'

export interface LoadBalancerPolicyArguments {
  id?: string
  load_balancer_name: string
  policy_name: string
  policy_type_name: string
}

export interface LoadBalancerPolicyAttributes {
  id: string
  load_balancer_name: string
  policy_name: string
  policy_type_name: string
}

export class LoadBalancerPolicy extends Resource<LoadBalancerPolicyArguments, LoadBalancerPolicyAttributes> {
  _kind = 'aws_load_balancer_policy'

  get id() {
    return this._attr('id')
  }

  get load_balancer_name() {
    return this._attr('load_balancer_name')
  }

  get policy_name() {
    return this._attr('policy_name')
  }

  get policy_type_name() {
    return this._attr('policy_type_name')
  }
}
