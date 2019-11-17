import {Resource} from '../Resource'

export interface EbsEncryptionByDefaultArguments {
  enabled?: boolean
  id?: string
}

export interface EbsEncryptionByDefaultAttributes {
  enabled?: boolean
  id: string
}

export class EbsEncryptionByDefault extends Resource<
  EbsEncryptionByDefaultArguments,
  EbsEncryptionByDefaultAttributes
> {
  kind = 'aws_ebs_encryption_by_default'
  _outputAttrNames = ['enabled', 'id'] as const
}
