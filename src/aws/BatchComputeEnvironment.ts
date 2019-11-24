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
  _kind = 'aws_batch_compute_environment'

  get arn() {
    return this._attr('arn')
  }

  get compute_environment_name() {
    return this._attr('compute_environment_name')
  }

  get ecc_cluster_arn() {
    return this._attr('ecc_cluster_arn')
  }

  get ecs_cluster_arn() {
    return this._attr('ecs_cluster_arn')
  }

  get id() {
    return this._attr('id')
  }

  get service_role() {
    return this._attr('service_role')
  }

  get state() {
    return this._attr('state')
  }

  get status() {
    return this._attr('status')
  }

  get status_reason() {
    return this._attr('status_reason')
  }

  get type() {
    return this._attr('type')
  }
}
