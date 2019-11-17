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
  kind = 'aws_ses_email_identity'
  _outputAttrNames = ['arn', 'email', 'id'] as const
}
