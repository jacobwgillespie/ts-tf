import {Resource} from '../Resource'

export interface SnsTopicPolicyArguments {
  arn: string
  id?: string
  policy: string
}

export interface SnsTopicPolicyAttributes {
  arn: string
  id: string
  policy: string
}

export class SnsTopicPolicy extends Resource<SnsTopicPolicyArguments, SnsTopicPolicyAttributes> {
  _kind = 'aws_sns_topic_policy'

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get policy() {
    return this._attr('policy')
  }
}
