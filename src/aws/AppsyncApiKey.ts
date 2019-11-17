import {Resource} from '../Resource'

export interface AppsyncApiKeyArguments {
  api_id: string
  description?: string
  expires?: string
  id?: string
}

export interface AppsyncApiKeyAttributes {
  api_id: string
  description?: string
  expires?: string
  id: string
  key: string
}

export class AppsyncApiKey extends Resource<AppsyncApiKeyArguments, AppsyncApiKeyAttributes> {
  kind = 'aws_appsync_api_key'
  _outputAttrNames = ['api_id', 'description', 'expires', 'id', 'key'] as const
}
