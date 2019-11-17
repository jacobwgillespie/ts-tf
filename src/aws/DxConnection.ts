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
  kind = 'aws_dx_connection'
  _outputAttrNames = [
    'arn',
    'aws_device',
    'bandwidth',
    'has_logical_redundancy',
    'id',
    'jumbo_frame_capable',
    'location',
    'name',
    'tags',
  ] as const
}
