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
  _kind = 'aws_cognito_resource_server'

  get id() {
    return this._attr('id')
  }

  get identifier() {
    return this._attr('identifier')
  }

  get name() {
    return this._attr('name')
  }

  get scope_identifiers() {
    return this._attr('scope_identifiers')
  }

  get user_pool_id() {
    return this._attr('user_pool_id')
  }
}
