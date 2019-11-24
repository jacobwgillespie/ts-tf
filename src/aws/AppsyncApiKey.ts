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
  _kind = 'aws_appsync_api_key'

  get api_id() {
    return this._attr('api_id')
  }

  get description() {
    return this._attr('description')
  }

  get expires() {
    return this._attr('expires')
  }

  get id() {
    return this._attr('id')
  }

  get key() {
    return this._attr('key')
  }
}
