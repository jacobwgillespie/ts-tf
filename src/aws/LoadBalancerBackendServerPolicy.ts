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
  _kind = 'aws_load_balancer_backend_server_policy'

  get id() {
    return this._attr('id')
  }

  get instance_port() {
    return this._attr('instance_port')
  }

  get load_balancer_name() {
    return this._attr('load_balancer_name')
  }

  get policy_names() {
    return this._attr('policy_names')
  }
}
