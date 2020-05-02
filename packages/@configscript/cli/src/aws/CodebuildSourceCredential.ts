import {Resource} from '../Resource'

export interface CodebuildSourceCredentialArguments {
  auth_type: string
  id?: string
  server_type: string
  token: string
  user_name?: string
}

export interface CodebuildSourceCredentialAttributes {
  arn: string
  auth_type: string
  id: string
  server_type: string
  token: string
  user_name?: string
}

export class CodebuildSourceCredential extends Resource<
  CodebuildSourceCredentialArguments,
  CodebuildSourceCredentialAttributes
> {
  _kind = 'aws_codebuild_source_credential'

  get arn() {
    return this._attr('arn')
  }

  get auth_type() {
    return this._attr('auth_type')
  }

  get id() {
    return this._attr('id')
  }

  get server_type() {
    return this._attr('server_type')
  }

  get token() {
    return this._attr('token')
  }

  get user_name() {
    return this._attr('user_name')
  }
}
