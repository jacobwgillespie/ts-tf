import {Resource} from '../Resource'

export interface DevicefarmProjectArguments {
  id?: string
  name: string
}

export interface DevicefarmProjectAttributes {
  arn: string
  id: string
  name: string
}

export class DevicefarmProject extends Resource<DevicefarmProjectArguments, DevicefarmProjectAttributes> {
  kind = 'aws_devicefarm_project'
  _outputAttrNames = ['arn', 'id', 'name'] as const
}
