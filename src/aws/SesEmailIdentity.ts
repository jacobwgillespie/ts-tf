import {Resource} from '../Resource'

export interface SesEmailIdentityArguments {
  email: string
  id?: string
}

export interface SesEmailIdentityAttributes {
  arn: string
  email: string
  id: string
}

export class SesEmailIdentity extends Resource<SesEmailIdentityArguments, SesEmailIdentityAttributes> {
  _kind = 'aws_ses_email_identity'

  get arn() {
    return this._attr('arn')
  }

  get email() {
    return this._attr('email')
  }

  get id() {
    return this._attr('id')
  }
}
