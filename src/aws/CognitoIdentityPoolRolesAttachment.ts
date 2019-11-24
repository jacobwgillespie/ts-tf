import {Resource} from '../Resource'

export interface CognitoIdentityPoolRolesAttachmentArguments {
  id?: string
  identity_pool_id: string
  roles: {[key: string]: string}
}

export interface CognitoIdentityPoolRolesAttachmentAttributes {
  id: string
  identity_pool_id: string
  roles: {[key: string]: string}
}

export class CognitoIdentityPoolRolesAttachment extends Resource<
  CognitoIdentityPoolRolesAttachmentArguments,
  CognitoIdentityPoolRolesAttachmentAttributes
> {
  _kind = 'aws_cognito_identity_pool_roles_attachment'

  get id() {
    return this._attr('id')
  }

  get identity_pool_id() {
    return this._attr('identity_pool_id')
  }

  get roles() {
    return this._attr('roles')
  }
}
