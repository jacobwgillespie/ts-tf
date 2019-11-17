import {Resource} from '../Resource'

export interface CognitoResourceServerArguments {
  id?: string
  identifier: string
  name: string
  user_pool_id: string
}

export interface CognitoResourceServerAttributes {
  id: string
  identifier: string
  name: string
  scope_identifiers: Array<string>
  user_pool_id: string
}

export class CognitoResourceServer extends Resource<CognitoResourceServerArguments, CognitoResourceServerAttributes> {
  kind = 'aws_cognito_resource_server'
  _outputAttrNames = ['id', 'identifier', 'name', 'scope_identifiers', 'user_pool_id'] as const
}
