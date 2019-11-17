import {Resource} from '../Resource'

export interface AppsyncGraphqlApiArguments {
  authentication_type: string
  id?: string
  name: string
  schema?: string
  tags?: {[key: string]: string}
}

export interface AppsyncGraphqlApiAttributes {
  arn: string
  authentication_type: string
  id: string
  name: string
  schema?: string
  tags?: {[key: string]: string}
  uris: {[key: string]: string}
}

export class AppsyncGraphqlApi extends Resource<AppsyncGraphqlApiArguments, AppsyncGraphqlApiAttributes> {
  kind = 'aws_appsync_graphql_api'
  _outputAttrNames = ['arn', 'authentication_type', 'id', 'name', 'schema', 'tags', 'uris'] as const
}
