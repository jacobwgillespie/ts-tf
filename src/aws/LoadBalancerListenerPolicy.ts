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
  kind = 'aws_load_balancer_listener_policy'
  _outputAttrNames = ['id', 'load_balancer_name', 'load_balancer_port', 'policy_names'] as const
}
