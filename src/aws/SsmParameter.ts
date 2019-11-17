import {Resource} from '../Resource'

export interface SsmParameterArguments {
  allowed_pattern?: string
  arn?: string
  description?: string
  id?: string
  key_id?: string
  name: string
  overwrite?: boolean
  tags?: {[key: string]: string}
  tier?: string
  type: string
  value: string
}

export interface SsmParameterAttributes {
  allowed_pattern?: string
  arn: string
  description?: string
  id: string
  key_id: string
  name: string
  overwrite?: boolean
  tags?: {[key: string]: string}
  tier?: string
  type: string
  value: string
  version: number
}

export class SsmParameter extends Resource<SsmParameterArguments, SsmParameterAttributes> {
  kind = 'aws_ssm_parameter'
  _outputAttrNames = [
    'allowed_pattern',
    'arn',
    'description',
    'id',
    'key_id',
    'name',
    'overwrite',
    'tags',
    'tier',
    'type',
    'value',
    'version',
  ] as const
}
