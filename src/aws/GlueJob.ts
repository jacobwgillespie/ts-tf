import {Resource} from '../Resource'

export interface GlueJobArguments {
  allocated_capacity?: number
  connections?: Array<string>
  default_arguments?: {[key: string]: string}
  description?: string
  id?: string
  max_capacity?: number
  max_retries?: number
  name: string
  role_arn: string
  security_configuration?: string
  timeout?: number
}

export interface GlueJobAttributes {
  allocated_capacity: number
  connections?: Array<string>
  default_arguments?: {[key: string]: string}
  description?: string
  id: string
  max_capacity: number
  max_retries?: number
  name: string
  role_arn: string
  security_configuration?: string
  timeout?: number
}

export class GlueJob extends Resource<GlueJobArguments, GlueJobAttributes> {
  kind = 'aws_glue_job'
  _outputAttrNames = [
    'allocated_capacity',
    'connections',
    'default_arguments',
    'description',
    'id',
    'max_capacity',
    'max_retries',
    'name',
    'role_arn',
    'security_configuration',
    'timeout',
  ] as const
}
