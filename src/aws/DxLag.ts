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
  kind = 'aws_dx_lag'
  _outputAttrNames = [
    'arn',
    'connections_bandwidth',
    'force_destroy',
    'has_logical_redundancy',
    'id',
    'jumbo_frame_capable',
    'location',
    'name',
    'number_of_connections',
    'tags',
  ] as const
}
