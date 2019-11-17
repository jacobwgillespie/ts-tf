import {Resource} from '../Resource'

export interface SsmActivationArguments {
  description?: string
  expiration_date?: string
  iam_role: string
  id?: string
  name?: string
  registration_limit?: number
  tags?: {[key: string]: string}
}

export interface SsmActivationAttributes {
  activation_code: string
  description?: string
  expiration_date?: string
  expired: string
  iam_role: string
  id: string
  name?: string
  registration_count: number
  registration_limit?: number
  tags?: {[key: string]: string}
}

export class SsmActivation extends Resource<SsmActivationArguments, SsmActivationAttributes> {
  kind = 'aws_ssm_activation'
  _outputAttrNames = [
    'activation_code',
    'description',
    'expiration_date',
    'expired',
    'iam_role',
    'id',
    'name',
    'registration_count',
    'registration_limit',
    'tags',
  ] as const
}
