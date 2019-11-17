import {Resource} from '../Resource'

export interface SfnActivityArguments {
  id?: string
  name: string
  tags?: {[key: string]: string}
}

export interface SfnActivityAttributes {
  creation_date: string
  id: string
  name: string
  tags?: {[key: string]: string}
}

export class SfnActivity extends Resource<SfnActivityArguments, SfnActivityAttributes> {
  kind = 'aws_sfn_activity'
  _outputAttrNames = ['creation_date', 'id', 'name', 'tags'] as const
}
