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
  _kind = 'aws_proxy_protocol_policy'

  get id() {
    return this._attr('id')
  }

  get instance_ports() {
    return this._attr('instance_ports')
  }

  get load_balancer() {
    return this._attr('load_balancer')
  }
}
