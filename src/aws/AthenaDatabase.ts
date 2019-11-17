import {Resource} from '../Resource'

export interface AthenaDatabaseArguments {
  bucket: string
  force_destroy?: boolean
  id?: string
  name: string
}

export interface AthenaDatabaseAttributes {
  bucket: string
  force_destroy?: boolean
  id: string
  name: string
}

export class AthenaDatabase extends Resource<AthenaDatabaseArguments, AthenaDatabaseAttributes> {
  kind = 'aws_athena_database'
  _outputAttrNames = ['bucket', 'force_destroy', 'id', 'name'] as const
}
