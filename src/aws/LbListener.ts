import {Resource} from '../Resource'

export interface LbListenerArguments {
  certificate_arn?: string
  id?: string
  load_balancer_arn: string
  port: number
  protocol?: string
  ssl_policy?: string
}

export interface LbListenerAttributes {
  arn: string
  certificate_arn?: string
  id: string
  load_balancer_arn: string
  port: number
  protocol?: string
  ssl_policy: string
}

export class LbListener extends Resource<LbListenerArguments, LbListenerAttributes> {
  kind = 'aws_lb_listener'
  _outputAttrNames = ['arn', 'certificate_arn', 'id', 'load_balancer_arn', 'port', 'protocol', 'ssl_policy'] as const
}
