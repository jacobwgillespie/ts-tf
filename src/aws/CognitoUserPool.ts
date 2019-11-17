import {Resource} from '../Resource'

export interface CognitoUserPoolArguments {
  alias_attributes?: Set<string>
  auto_verified_attributes?: Set<string>
  email_verification_message?: string
  email_verification_subject?: string
  id?: string
  mfa_configuration?: string
  name: string
  sms_authentication_message?: string
  sms_verification_message?: string
  tags?: {[key: string]: string}
  username_attributes?: Array<string>
}

export interface CognitoUserPoolAttributes {
  alias_attributes?: Set<string>
  arn: string
  auto_verified_attributes?: Set<string>
  creation_date: string
  email_verification_message: string
  email_verification_subject: string
  endpoint: string
  id: string
  last_modified_date: string
  mfa_configuration?: string
  name: string
  sms_authentication_message?: string
  sms_verification_message?: string
  tags?: {[key: string]: string}
  username_attributes?: Array<string>
}

export class CognitoUserPool extends Resource<CognitoUserPoolArguments, CognitoUserPoolAttributes> {
  kind = 'aws_cognito_user_pool'
  _outputAttrNames = [
    'alias_attributes',
    'arn',
    'auto_verified_attributes',
    'creation_date',
    'email_verification_message',
    'email_verification_subject',
    'endpoint',
    'id',
    'last_modified_date',
    'mfa_configuration',
    'name',
    'sms_authentication_message',
    'sms_verification_message',
    'tags',
    'username_attributes',
  ] as const
}
