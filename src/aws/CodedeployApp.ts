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
  kind = 'aws_codedeploy_app'
  _outputAttrNames = ['compute_platform', 'id', 'name', 'unique_id'] as const
}
