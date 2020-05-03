import {Resource} from '../Resource'

export interface EbsDefaultKmsKeyArguments {
  id?: string
  key_arn: string
}

export interface EbsDefaultKmsKeyAttributes {
  id: string
  key_arn: string
}

export class EbsDefaultKmsKey extends Resource<EbsDefaultKmsKeyArguments, EbsDefaultKmsKeyAttributes> {
  _kind = 'aws_ebs_default_kms_key'

  get id() {
    return this._attr('id')
  }

  get key_arn() {
    return this._attr('key_arn')
  }
}
