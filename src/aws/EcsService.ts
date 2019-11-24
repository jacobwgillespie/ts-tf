import {Resource} from '../Resource'

export interface EcsServiceArguments {
  cluster?: string
  deployment_maximum_percent?: number
  deployment_minimum_healthy_percent?: number
  desired_count?: number
  enable_ecs_managed_tags?: boolean
  health_check_grace_period_seconds?: number
  iam_role?: string
  id?: string
  launch_type?: string
  name: string
  platform_version?: string
  propagate_tags?: string
  scheduling_strategy?: string
  tags?: {[key: string]: string}
  task_definition: string
}

export interface EcsServiceAttributes {
  cluster: string
  deployment_maximum_percent?: number
  deployment_minimum_healthy_percent?: number
  desired_count?: number
  enable_ecs_managed_tags?: boolean
  health_check_grace_period_seconds?: number
  iam_role: string
  id: string
  launch_type?: string
  name: string
  platform_version: string
  propagate_tags?: string
  scheduling_strategy?: string
  tags?: {[key: string]: string}
  task_definition: string
}

export class EcsService extends Resource<EcsServiceArguments, EcsServiceAttributes> {
  _kind = 'aws_ecs_service'

  get cluster() {
    return this._attr('cluster')
  }

  get deployment_maximum_percent() {
    return this._attr('deployment_maximum_percent')
  }

  get deployment_minimum_healthy_percent() {
    return this._attr('deployment_minimum_healthy_percent')
  }

  get desired_count() {
    return this._attr('desired_count')
  }

  get enable_ecs_managed_tags() {
    return this._attr('enable_ecs_managed_tags')
  }

  get health_check_grace_period_seconds() {
    return this._attr('health_check_grace_period_seconds')
  }

  get iam_role() {
    return this._attr('iam_role')
  }

  get id() {
    return this._attr('id')
  }

  get launch_type() {
    return this._attr('launch_type')
  }

  get name() {
    return this._attr('name')
  }

  get platform_version() {
    return this._attr('platform_version')
  }

  get propagate_tags() {
    return this._attr('propagate_tags')
  }

  get scheduling_strategy() {
    return this._attr('scheduling_strategy')
  }

  get tags() {
    return this._attr('tags')
  }

  get task_definition() {
    return this._attr('task_definition')
  }
}
