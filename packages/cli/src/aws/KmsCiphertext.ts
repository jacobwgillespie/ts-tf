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
  _kind = 'aws_kms_ciphertext'

  get ciphertext_blob() {
    return this._attr('ciphertext_blob')
  }

  get context() {
    return this._attr('context')
  }

  get id() {
    return this._attr('id')
  }

  get key_id() {
    return this._attr('key_id')
  }

  get plaintext() {
    return this._attr('plaintext')
  }
}
