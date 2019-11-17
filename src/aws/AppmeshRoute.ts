import {Resource} from '../Resource'

export interface AppmeshRouteArguments {
  id?: string
  mesh_name: string
  name: string
  tags?: {[key: string]: string}
  virtual_router_name: string
}

export interface AppmeshRouteAttributes {
  arn: string
  created_date: string
  id: string
  last_updated_date: string
  mesh_name: string
  name: string
  tags?: {[key: string]: string}
  virtual_router_name: string
}

export class AppmeshRoute extends Resource<AppmeshRouteArguments, AppmeshRouteAttributes> {
  kind = 'aws_appmesh_route'
  _outputAttrNames = [
    'arn',
    'created_date',
    'id',
    'last_updated_date',
    'mesh_name',
    'name',
    'tags',
    'virtual_router_name',
  ] as const
}
