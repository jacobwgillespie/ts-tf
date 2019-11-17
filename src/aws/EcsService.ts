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
  kind = 'aws_ecs_service'
  _outputAttrNames = [
    'cluster',
    'deployment_maximum_percent',
    'deployment_minimum_healthy_percent',
    'desired_count',
    'enable_ecs_managed_tags',
    'health_check_grace_period_seconds',
    'iam_role',
    'id',
    'launch_type',
    'name',
    'platform_version',
    'propagate_tags',
    'scheduling_strategy',
    'tags',
    'task_definition',
  ] as const
}
