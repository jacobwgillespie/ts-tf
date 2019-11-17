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
  kind = 'aws_acmpca_certificate_authority'
  _outputAttrNames = [
    'arn',
    'certificate',
    'certificate_chain',
    'certificate_signing_request',
    'enabled',
    'id',
    'not_after',
    'not_before',
    'permanent_deletion_time_in_days',
    'serial',
    'status',
    'tags',
    'type',
  ] as const
}
