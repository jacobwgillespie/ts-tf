import {Resource} from '../Resource'

export interface EfsFileSystemArguments {
  creation_token?: string
  encrypted?: boolean
  id?: string
  kms_key_id?: string
  performance_mode?: string
  provisioned_throughput_in_mibps?: number
  reference_name?: string
  tags?: {[key: string]: string}
  throughput_mode?: string
}

export interface EfsFileSystemAttributes {
  arn: string
  creation_token: string
  dns_name: string
  encrypted: boolean
  id: string
  kms_key_id: string
  performance_mode: string
  provisioned_throughput_in_mibps?: number
  reference_name: string
  tags?: {[key: string]: string}
  throughput_mode?: string
}

export class EfsFileSystem extends Resource<EfsFileSystemArguments, EfsFileSystemAttributes> {
  kind = 'aws_efs_file_system'
  _outputAttrNames = [
    'arn',
    'creation_token',
    'dns_name',
    'encrypted',
    'id',
    'kms_key_id',
    'performance_mode',
    'provisioned_throughput_in_mibps',
    'reference_name',
    'tags',
    'throughput_mode',
  ] as const
}
