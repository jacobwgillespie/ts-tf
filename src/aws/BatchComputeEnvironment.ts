import {Resource} from '../Resource'

export interface BatchComputeEnvironmentArguments {
  compute_environment_name: string
  id?: string
  service_role: string
  state?: string
  type: string
}

export interface BatchComputeEnvironmentAttributes {
  arn: string
  compute_environment_name: string
  ecc_cluster_arn: string
  ecs_cluster_arn: string
  id: string
  service_role: string
  state?: string
  status: string
  status_reason: string
  type: string
}

export class BatchComputeEnvironment extends Resource<
  BatchComputeEnvironmentArguments,
  BatchComputeEnvironmentAttributes
> {
  kind = 'aws_batch_compute_environment'
  _outputAttrNames = [
    'arn',
    'compute_environment_name',
    'ecc_cluster_arn',
    'ecs_cluster_arn',
    'id',
    'service_role',
    'state',
    'status',
    'status_reason',
    'type',
  ] as const
}
