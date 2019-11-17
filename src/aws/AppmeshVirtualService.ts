import {Resource} from '../Resource'

export interface AppmeshVirtualServiceArguments {
  id?: string
  mesh_name: string
  name: string
  tags?: {[key: string]: string}
}

export interface AppmeshVirtualServiceAttributes {
  arn: string
  created_date: string
  id: string
  last_updated_date: string
  mesh_name: string
  name: string
  tags?: {[key: string]: string}
}

export class AppmeshVirtualService extends Resource<AppmeshVirtualServiceArguments, AppmeshVirtualServiceAttributes> {
  kind = 'aws_appmesh_virtual_service'
  _outputAttrNames = ['arn', 'created_date', 'id', 'last_updated_date', 'mesh_name', 'name', 'tags'] as const
}
