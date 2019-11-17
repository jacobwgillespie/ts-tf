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
  kind = 'aws_load_balancer_policy'
  _outputAttrNames = ['id', 'load_balancer_name', 'policy_name', 'policy_type_name'] as const
}
