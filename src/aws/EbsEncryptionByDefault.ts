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
  _kind = 'aws_ebs_encryption_by_default'

  get enabled() {
    return this._attr('enabled')
  }

  get id() {
    return this._attr('id')
  }
}
