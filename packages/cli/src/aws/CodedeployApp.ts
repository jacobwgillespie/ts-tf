import {Resource} from '../Resource'

export interface CodedeployAppArguments {
  compute_platform?: string
  id?: string
  name: string
  unique_id?: string
}

export interface CodedeployAppAttributes {
  compute_platform?: string
  id: string
  name: string
  unique_id: string
}

export class CodedeployApp extends Resource<CodedeployAppArguments, CodedeployAppAttributes> {
  _kind = 'aws_codedeploy_app'

  get compute_platform() {
    return this._attr('compute_platform')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get unique_id() {
    return this._attr('unique_id')
  }
}
