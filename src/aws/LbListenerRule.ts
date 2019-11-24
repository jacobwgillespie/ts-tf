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
  _kind = 'aws_lb_listener_rule'

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get listener_arn() {
    return this._attr('listener_arn')
  }

  get priority() {
    return this._attr('priority')
  }
}
