import {Resource} from '../Resource'

export interface RamResourceShareArguments {
  allow_external_principals?: boolean
  id?: string
  name: string
  tags?: {[key: string]: string}
}

export interface RamResourceShareAttributes {
  allow_external_principals?: boolean
  arn: string
  id: string
  name: string
  tags?: {[key: string]: string}
}

export class RamResourceShare extends Resource<RamResourceShareArguments, RamResourceShareAttributes> {
  kind = 'aws_ram_resource_share'
  _outputAttrNames = ['allow_external_principals', 'arn', 'id', 'name', 'tags'] as const
}
