import {Resource} from '../Resource'

export interface EcsTaskDefinitionArguments {
  container_definitions: string
  cpu?: string
  execution_role_arn?: string
  family: string
  id?: string
  ipc_mode?: string
  memory?: string
  network_mode?: string
  pid_mode?: string
  requires_compatibilities?: Set<string>
  tags?: {[key: string]: string}
  task_role_arn?: string
}

export interface EcsTaskDefinitionAttributes {
  arn: string
  container_definitions: string
  cpu?: string
  execution_role_arn?: string
  family: string
  id: string
  ipc_mode?: string
  memory?: string
  network_mode: string
  pid_mode?: string
  requires_compatibilities?: Set<string>
  revision: number
  tags?: {[key: string]: string}
  task_role_arn?: string
}

export class EcsTaskDefinition extends Resource<EcsTaskDefinitionArguments, EcsTaskDefinitionAttributes> {
  kind = 'aws_ecs_task_definition'
  _outputAttrNames = [
    'arn',
    'container_definitions',
    'cpu',
    'execution_role_arn',
    'family',
    'id',
    'ipc_mode',
    'memory',
    'network_mode',
    'pid_mode',
    'requires_compatibilities',
    'revision',
    'tags',
    'task_role_arn',
  ] as const
}
