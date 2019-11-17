import {Resource} from '../Resource'

export interface TransferServerArguments {
  endpoint_type?: string
  force_destroy?: boolean
  id?: string
  identity_provider_type?: string
  invocation_role?: string
  logging_role?: string
  tags?: {[key: string]: string}
  url?: string
}

export interface TransferServerAttributes {
  arn: string
  endpoint: string
  endpoint_type?: string
  force_destroy?: boolean
  id: string
  identity_provider_type?: string
  invocation_role?: string
  logging_role?: string
  tags?: {[key: string]: string}
  url?: string
}

export class TransferServer extends Resource<TransferServerArguments, TransferServerAttributes> {
  kind = 'aws_transfer_server'
  _outputAttrNames = [
    'arn',
    'endpoint',
    'endpoint_type',
    'force_destroy',
    'id',
    'identity_provider_type',
    'invocation_role',
    'logging_role',
    'tags',
    'url',
  ] as const
}
