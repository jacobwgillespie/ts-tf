import {Resource} from '../Resource'

export interface LbSslNegotiationPolicyArguments {
  id?: string
  lb_port: number
  load_balancer: string
  name: string
}

export interface LbSslNegotiationPolicyAttributes {
  id: string
  lb_port: number
  load_balancer: string
  name: string
}

export class LbSslNegotiationPolicy extends Resource<
  LbSslNegotiationPolicyArguments,
  LbSslNegotiationPolicyAttributes
> {
  kind = 'aws_lb_ssl_negotiation_policy'
  _outputAttrNames = ['id', 'lb_port', 'load_balancer', 'name'] as const
}
