import {Resource} from '../Resource'

export interface BatchJobQueueArguments {
  compute_environments: Array<string>
  id?: string
  name: string
  priority: number
  state: string
}

export interface BatchJobQueueAttributes {
  arn: string
  compute_environments: Array<string>
  id: string
  name: string
  priority: number
  state: string
}

export class BatchJobQueue extends Resource<BatchJobQueueArguments, BatchJobQueueAttributes> {
  _kind = 'aws_batch_job_queue'

  get arn() {
    return this._attr('arn')
  }

  get compute_environments() {
    return this._attr('compute_environments')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get priority() {
    return this._attr('priority')
  }

  get state() {
    return this._attr('state')
  }
}
