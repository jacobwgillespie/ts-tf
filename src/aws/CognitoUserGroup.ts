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
  kind = 'aws_cognito_user_group'
  _outputAttrNames = ['description', 'id', 'name', 'precedence', 'role_arn', 'user_pool_id'] as const
}
