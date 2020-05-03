import {Resource} from '../Resource'

export interface AcmpcaCertificateAuthorityArguments {
  enabled?: boolean
  id?: string
  permanent_deletion_time_in_days?: number
  tags?: {[key: string]: string}
  type?: string
}

export interface AcmpcaCertificateAuthorityAttributes {
  arn: string
  certificate: string
  certificate_chain: string
  certificate_signing_request: string
  enabled?: boolean
  id: string
  not_after: string
  not_before: string
  permanent_deletion_time_in_days?: number
  serial: string
  status: string
  tags?: {[key: string]: string}
  type?: string
}

export class AcmpcaCertificateAuthority extends Resource<
  AcmpcaCertificateAuthorityArguments,
  AcmpcaCertificateAuthorityAttributes
> {
  _kind = 'aws_acmpca_certificate_authority'

  get arn() {
    return this._attr('arn')
  }

  get certificate() {
    return this._attr('certificate')
  }

  get certificate_chain() {
    return this._attr('certificate_chain')
  }

  get certificate_signing_request() {
    return this._attr('certificate_signing_request')
  }

  get enabled() {
    return this._attr('enabled')
  }

  get id() {
    return this._attr('id')
  }

  get not_after() {
    return this._attr('not_after')
  }

  get not_before() {
    return this._attr('not_before')
  }

  get permanent_deletion_time_in_days() {
    return this._attr('permanent_deletion_time_in_days')
  }

  get serial() {
    return this._attr('serial')
  }

  get status() {
    return this._attr('status')
  }

  get tags() {
    return this._attr('tags')
  }

  get type() {
    return this._attr('type')
  }
}
