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
  _kind = 'aws_appsync_graphql_api'

  get arn() {
    return this._attr('arn')
  }

  get authentication_type() {
    return this._attr('authentication_type')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get schema() {
    return this._attr('schema')
  }

  get tags() {
    return this._attr('tags')
  }

  get uris() {
    return this._attr('uris')
  }
}
