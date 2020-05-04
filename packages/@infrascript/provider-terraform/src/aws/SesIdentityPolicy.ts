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
  _kind = 'aws_ses_identity_policy'

  get id() {
    return this._attr('id')
  }

  get identity() {
    return this._attr('identity')
  }

  get name() {
    return this._attr('name')
  }

  get policy() {
    return this._attr('policy')
  }
}
