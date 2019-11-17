import {Resource} from '../Resource'

export interface CodebuildProjectArguments {
  badge_enabled?: boolean
  build_timeout?: number
  description?: string
  encryption_key?: string
  id?: string
  name: string
  service_role: string
  tags?: {[key: string]: string}
}

export interface CodebuildProjectAttributes {
  arn: string
  badge_enabled?: boolean
  badge_url: string
  build_timeout?: number
  description: string
  encryption_key: string
  id: string
  name: string
  service_role: string
  tags?: {[key: string]: string}
}

export class CodebuildProject extends Resource<CodebuildProjectArguments, CodebuildProjectAttributes> {
  kind = 'aws_codebuild_project'
  _outputAttrNames = [
    'arn',
    'badge_enabled',
    'badge_url',
    'build_timeout',
    'description',
    'encryption_key',
    'id',
    'name',
    'service_role',
    'tags',
  ] as const
}
