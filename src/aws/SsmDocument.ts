import {Resource} from '../Resource'

export interface SsmDocumentArguments {
  content: string
  document_format?: string
  document_type: string
  id?: string
  name: string
  permissions?: {[key: string]: string}
  tags?: {[key: string]: string}
}

export interface SsmDocumentAttributes {
  arn: string
  content: string
  created_date: string
  default_version: string
  description: string
  document_format?: string
  document_type: string
  hash: string
  hash_type: string
  id: string
  latest_version: string
  name: string
  owner: string
  parameter: Array<{default_value: string; description: string; name: string; type: string}>
  permissions?: {[key: string]: string}
  platform_types: Array<string>
  schema_version: string
  status: string
  tags?: {[key: string]: string}
}

export class SsmDocument extends Resource<SsmDocumentArguments, SsmDocumentAttributes> {
  kind = 'aws_ssm_document'
  _outputAttrNames = [
    'arn',
    'content',
    'created_date',
    'default_version',
    'description',
    'document_format',
    'document_type',
    'hash',
    'hash_type',
    'id',
    'latest_version',
    'name',
    'owner',
    'parameter',
    'permissions',
    'platform_types',
    'schema_version',
    'status',
    'tags',
  ] as const
}
