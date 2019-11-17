import {Resource} from '../Resource'

export interface AlbListenerArguments {
  certificate_arn?: string
  id?: string
  load_balancer_arn: string
  port: number
  protocol?: string
  ssl_policy?: string
}

export interface AlbListenerAttributes {
  arn: string
  certificate_arn?: string
  id: string
  load_balancer_arn: string
  port: number
  protocol?: string
  ssl_policy: string
}

export class AlbListener extends Resource<AlbListenerArguments, AlbListenerAttributes> {
  kind = 'aws_alb_listener'
  _outputAttrNames = ['arn', 'certificate_arn', 'id', 'load_balancer_arn', 'port', 'protocol', 'ssl_policy'] as const
}
