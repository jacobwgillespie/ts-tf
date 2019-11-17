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
  kind = 'aws_codebuild_source_credential'
  _outputAttrNames = ['arn', 'auth_type', 'id', 'server_type', 'token', 'user_name'] as const
}
