import {Resource} from '../Resource'

export interface AlbListenerRuleArguments {
  id?: string
  listener_arn: string
  priority?: number
}

export interface AlbListenerRuleAttributes {
  arn: string
  id: string
  listener_arn: string
  priority: number
}

export class AlbListenerRule extends Resource<AlbListenerRuleArguments, AlbListenerRuleAttributes> {
  kind = 'aws_alb_listener_rule'
  _outputAttrNames = ['arn', 'id', 'listener_arn', 'priority'] as const
}
