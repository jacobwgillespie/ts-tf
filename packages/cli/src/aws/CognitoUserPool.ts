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
  _kind = 'aws_cognito_user_pool'

  get alias_attributes() {
    return this._attr('alias_attributes')
  }

  get arn() {
    return this._attr('arn')
  }

  get auto_verified_attributes() {
    return this._attr('auto_verified_attributes')
  }

  get creation_date() {
    return this._attr('creation_date')
  }

  get email_verification_message() {
    return this._attr('email_verification_message')
  }

  get email_verification_subject() {
    return this._attr('email_verification_subject')
  }

  get endpoint() {
    return this._attr('endpoint')
  }

  get id() {
    return this._attr('id')
  }

  get last_modified_date() {
    return this._attr('last_modified_date')
  }

  get mfa_configuration() {
    return this._attr('mfa_configuration')
  }

  get name() {
    return this._attr('name')
  }

  get sms_authentication_message() {
    return this._attr('sms_authentication_message')
  }

  get sms_verification_message() {
    return this._attr('sms_verification_message')
  }

  get tags() {
    return this._attr('tags')
  }

  get username_attributes() {
    return this._attr('username_attributes')
  }
}
