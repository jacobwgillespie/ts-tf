import {Resource} from '../Resource'

export interface AppmeshVirtualRouterArguments {
  id?: string
  mesh_name: string
  name: string
  tags?: {[key: string]: string}
}

export interface AppmeshVirtualRouterAttributes {
  arn: string
  created_date: string
  id: string
  last_updated_date: string
  mesh_name: string
  name: string
  tags?: {[key: string]: string}
}

export class AppmeshVirtualRouter extends Resource<AppmeshVirtualRouterArguments, AppmeshVirtualRouterAttributes> {
  kind = 'aws_appmesh_virtual_router'
  _outputAttrNames = ['arn', 'created_date', 'id', 'last_updated_date', 'mesh_name', 'name', 'tags'] as const
}
