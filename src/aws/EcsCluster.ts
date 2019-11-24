import {Resource} from '../Resource'

export interface EcsClusterArguments {
  id?: string
  name: string
  tags?: {[key: string]: string}
}

export interface EcsClusterAttributes {
  arn: string
  id: string
  name: string
  tags?: {[key: string]: string}
}

export class EcsCluster extends Resource<EcsClusterArguments, EcsClusterAttributes> {
  _kind = 'aws_ecs_cluster'

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get tags() {
    return this._attr('tags')
  }
}
