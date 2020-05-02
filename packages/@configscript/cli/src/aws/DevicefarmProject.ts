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
  _kind = 'aws_devicefarm_project'

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }
}
