import {Resource} from '../Resource'

export interface SqsQueuePolicyArguments {
  id?: string
  policy: string
  queue_url: string
}

export interface SqsQueuePolicyAttributes {
  id: string
  policy: string
  queue_url: string
}

export class SqsQueuePolicy extends Resource<SqsQueuePolicyArguments, SqsQueuePolicyAttributes> {
  kind = 'aws_sqs_queue_policy'
  _outputAttrNames = ['id', 'policy', 'queue_url'] as const
}
