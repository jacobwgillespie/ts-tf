import {Resource} from '../Resource'

export interface DxLagArguments {
  connections_bandwidth: string
  force_destroy?: boolean
  id?: string
  location: string
  name: string
  number_of_connections?: number
  tags?: {[key: string]: string}
}

export interface DxLagAttributes {
  arn: string
  connections_bandwidth: string
  force_destroy?: boolean
  has_logical_redundancy: string
  id: string
  jumbo_frame_capable: boolean
  location: string
  name: string
  number_of_connections: number
  tags?: {[key: string]: string}
}

export class DxLag extends Resource<DxLagArguments, DxLagAttributes> {
  _kind = 'aws_dx_lag'

  get arn() {
    return this._attr('arn')
  }

  get connections_bandwidth() {
    return this._attr('connections_bandwidth')
  }

  get force_destroy() {
    return this._attr('force_destroy')
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

  get number_of_connections() {
    return this._attr('number_of_connections')
  }

  get tags() {
    return this._attr('tags')
  }
}
