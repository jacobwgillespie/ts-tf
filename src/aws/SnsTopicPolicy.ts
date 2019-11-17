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
  kind = 'aws_sns_topic_policy'
  _outputAttrNames = ['arn', 'id', 'policy'] as const
}
