import {Resource} from '../Resource'

export interface AthenaWorkgroupArguments {
  description?: string
  id?: string
  name: string
  state?: string
  tags?: {[key: string]: string}
}

export interface AthenaWorkgroupAttributes {
  arn: string
  description?: string
  id: string
  name: string
  state?: string
  tags?: {[key: string]: string}
}

export class AthenaWorkgroup extends Resource<AthenaWorkgroupArguments, AthenaWorkgroupAttributes> {
  kind = 'aws_athena_workgroup'
  _outputAttrNames = ['arn', 'description', 'id', 'name', 'state', 'tags'] as const
}
