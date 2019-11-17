import {Resource} from '../Resource'

export interface LoadBalancerBackendServerPolicyArguments {
  id?: string
  instance_port: number
  load_balancer_name: string
  policy_names?: Set<string>
}

export interface LoadBalancerBackendServerPolicyAttributes {
  id: string
  instance_port: number
  load_balancer_name: string
  policy_names?: Set<string>
}

export class LoadBalancerBackendServerPolicy extends Resource<
  LoadBalancerBackendServerPolicyArguments,
  LoadBalancerBackendServerPolicyAttributes
> {
  kind = 'aws_load_balancer_backend_server_policy'
  _outputAttrNames = ['id', 'instance_port', 'load_balancer_name', 'policy_names'] as const
}
