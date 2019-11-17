import {Resource} from '../Resource'

export interface SesIdentityPolicyArguments {
  id?: string
  identity: string
  name: string
  policy: string
}

export interface SesIdentityPolicyAttributes {
  id: string
  identity: string
  name: string
  policy: string
}

export class SesIdentityPolicy extends Resource<SesIdentityPolicyArguments, SesIdentityPolicyAttributes> {
  kind = 'aws_ses_identity_policy'
  _outputAttrNames = ['id', 'identity', 'name', 'policy'] as const
}
