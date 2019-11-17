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
  kind = 'aws_ebs_default_kms_key'
  _outputAttrNames = ['id', 'key_arn'] as const
}
