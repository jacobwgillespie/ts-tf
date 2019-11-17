import {Resource} from '../Resource'

export interface KmsCiphertextArguments {
  context?: {[key: string]: string}
  id?: string
  key_id: string
  plaintext: string
}

export interface KmsCiphertextAttributes {
  ciphertext_blob: string
  context?: {[key: string]: string}
  id: string
  key_id: string
  plaintext: string
}

export class KmsCiphertext extends Resource<KmsCiphertextArguments, KmsCiphertextAttributes> {
  kind = 'aws_kms_ciphertext'
  _outputAttrNames = ['ciphertext_blob', 'context', 'id', 'key_id', 'plaintext'] as const
}
