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
  _kind = 'aws_alb_listener_rule'

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
