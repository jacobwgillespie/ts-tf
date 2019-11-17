import {Resource} from '../Resource'

export interface ProxyProtocolPolicyArguments {
  id?: string
  instance_ports: Set<string>
  load_balancer: string
}

export interface ProxyProtocolPolicyAttributes {
  id: string
  instance_ports: Set<string>
  load_balancer: string
}

export class ProxyProtocolPolicy extends Resource<ProxyProtocolPolicyArguments, ProxyProtocolPolicyAttributes> {
  kind = 'aws_proxy_protocol_policy'
  _outputAttrNames = ['id', 'instance_ports', 'load_balancer'] as const
}
