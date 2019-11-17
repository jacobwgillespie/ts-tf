import {Resource} from '../Resource'

export interface AppmeshVirtualNodeArguments {
  id?: string
  mesh_name: string
  name: string
  tags?: {[key: string]: string}
}

export interface AppmeshVirtualNodeAttributes {
  arn: string
  created_date: string
  id: string
  last_updated_date: string
  mesh_name: string
  name: string
  tags?: {[key: string]: string}
}

export class AppmeshVirtualNode extends Resource<AppmeshVirtualNodeArguments, AppmeshVirtualNodeAttributes> {
  kind = 'aws_appmesh_virtual_node'
  _outputAttrNames = ['arn', 'created_date', 'id', 'last_updated_date', 'mesh_name', 'name', 'tags'] as const
}
