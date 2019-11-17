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
  kind = 'aws_batch_job_queue'
  _outputAttrNames = ['arn', 'compute_environments', 'id', 'name', 'priority', 'state'] as const
}
