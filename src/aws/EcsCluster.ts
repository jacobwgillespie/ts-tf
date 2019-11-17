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
  kind = 'aws_ecs_cluster'
  _outputAttrNames = ['arn', 'id', 'name', 'tags'] as const
}
