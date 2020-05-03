import {Resource} from '../Resource'

export interface CognitoUserGroupArguments {
  description?: string
  id?: string
  name: string
  precedence?: number
  role_arn?: string
  user_pool_id: string
}

export interface CognitoUserGroupAttributes {
  description?: string
  id: string
  name: string
  precedence?: number
  role_arn?: string
  user_pool_id: string
}

export class CognitoUserGroup extends Resource<CognitoUserGroupArguments, CognitoUserGroupAttributes> {
  _kind = 'aws_cognito_user_group'

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get precedence() {
    return this._attr('precedence')
  }

  get role_arn() {
    return this._attr('role_arn')
  }

  get user_pool_id() {
    return this._attr('user_pool_id')
  }
}
