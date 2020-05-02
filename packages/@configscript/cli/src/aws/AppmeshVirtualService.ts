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
  _kind = 'aws_appmesh_virtual_service'

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

  get mesh_name() {
    return this._attr('mesh_name')
  }

  get name() {
    return this._attr('name')
  }

  get tags() {
    return this._attr('tags')
  }
}
