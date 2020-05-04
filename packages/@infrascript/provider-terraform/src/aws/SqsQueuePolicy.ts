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
  _kind = 'aws_sqs_queue_policy'

  get id() {
    return this._attr('id')
  }

  get policy() {
    return this._attr('policy')
  }

  get queue_url() {
    return this._attr('queue_url')
  }
}
