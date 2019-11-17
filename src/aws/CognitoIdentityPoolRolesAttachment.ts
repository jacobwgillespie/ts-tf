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
  kind = 'aws_cognito_identity_pool_roles_attachment'
  _outputAttrNames = ['id', 'identity_pool_id', 'roles'] as const
}
