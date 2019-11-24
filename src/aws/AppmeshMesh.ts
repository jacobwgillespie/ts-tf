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
  _kind = 'aws_appmesh_mesh'

  get arn() {
    return this._attr('arn')
  }

  get created_date() {
    return this._attr('created_date')
  }

  get id() {
    return this._attr('id')
  }

  get last_updated_date() {
    return this._attr('last_updated_date')
  }

  get name() {
    return this._attr('name')
  }

  get tags() {
    return this._attr('tags')
  }
}
