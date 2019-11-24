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
  _kind = 'aws_ecs_task_definition'

  get arn() {
    return this._attr('arn')
  }

  get container_definitions() {
    return this._attr('container_definitions')
  }

  get cpu() {
    return this._attr('cpu')
  }

  get execution_role_arn() {
    return this._attr('execution_role_arn')
  }

  get family() {
    return this._attr('family')
  }

  get id() {
    return this._attr('id')
  }

  get ipc_mode() {
    return this._attr('ipc_mode')
  }

  get memory() {
    return this._attr('memory')
  }

  get network_mode() {
    return this._attr('network_mode')
  }

  get pid_mode() {
    return this._attr('pid_mode')
  }

  get requires_compatibilities() {
    return this._attr('requires_compatibilities')
  }

  get revision() {
    return this._attr('revision')
  }

  get tags() {
    return this._attr('tags')
  }

  get task_role_arn() {
    return this._attr('task_role_arn')
  }
}
