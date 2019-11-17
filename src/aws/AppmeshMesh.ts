import {Resource} from '../Resource'

export interface AppmeshMeshArguments {
  id?: string
  name: string
  tags?: {[key: string]: string}
}

export interface AppmeshMeshAttributes {
  arn: string
  created_date: string
  id: string
  last_updated_date: string
  name: string
  tags?: {[key: string]: string}
}

export class AppmeshMesh extends Resource<AppmeshMeshArguments, AppmeshMeshAttributes> {
  kind = 'aws_appmesh_mesh'
  _outputAttrNames = ['arn', 'created_date', 'id', 'last_updated_date', 'name', 'tags'] as const
}
