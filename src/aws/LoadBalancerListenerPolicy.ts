import {Resource} from '../Resource'

export interface LoadBalancerListenerPolicyArguments {
  id?: string
  load_balancer_name: string
  load_balancer_port: number
  policy_names?: Set<string>
}

export interface LoadBalancerListenerPolicyAttributes {
  id: string
  load_balancer_name: string
  load_balancer_port: number
  policy_names?: Set<string>
}

export class LoadBalancerListenerPolicy extends Resource<
  LoadBalancerListenerPolicyArguments,
  LoadBalancerListenerPolicyAttributes
> {
  _kind = 'aws_load_balancer_listener_policy'

  get id() {
    return this._attr('id')
  }

  get load_balancer_name() {
    return this._attr('load_balancer_name')
  }

  get load_balancer_port() {
    return this._attr('load_balancer_port')
  }

  get policy_names() {
    return this._attr('policy_names')
  }
}
