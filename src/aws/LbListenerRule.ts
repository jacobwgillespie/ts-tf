import {Resource} from '../Resource'

export interface LbListenerRuleArguments {
  id?: string
  listener_arn: string
  priority?: number
}

export interface LbListenerRuleAttributes {
  arn: string
  id: string
  listener_arn: string
  priority: number
}

export class LbListenerRule extends Resource<LbListenerRuleArguments, LbListenerRuleAttributes> {
  kind = 'aws_lb_listener_rule'
  _outputAttrNames = ['arn', 'id', 'listener_arn', 'priority'] as const
}
