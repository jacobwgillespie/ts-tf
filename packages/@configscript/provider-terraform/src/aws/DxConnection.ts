import {Resource} from '../Resource'

export interface DxConnectionArguments {
  bandwidth: string
  id?: string
  location: string
  name: string
  tags?: {[key: string]: string}
}

export interface DxConnectionAttributes {
  arn: string
  aws_device: string
  bandwidth: string
  has_logical_redundancy: string
  id: string
  jumbo_frame_capable: boolean
  location: string
  name: string
  tags?: {[key: string]: string}
}

export class DxConnection extends Resource<DxConnectionArguments, DxConnectionAttributes> {
  _kind = 'aws_dx_connection'

  get arn() {
    return this._attr('arn')
  }

  get aws_device() {
    return this._attr('aws_device')
  }

  get bandwidth() {
    return this._attr('bandwidth')
  }

  get has_logical_redundancy() {
    return this._attr('has_logical_redundancy')
  }

  get id() {
    return this._attr('id')
  }

  get jumbo_frame_capable() {
    return this._attr('jumbo_frame_capable')
  }

  get location() {
    return this._attr('location')
  }

  get name() {
    return this._attr('name')
  }

  get tags() {
    return this._attr('tags')
  }
}
