import {Resource} from '../Resource'

export interface TransferServerArguments {
  endpoint_type?: string
  force_destroy?: boolean
  id?: string
  identity_provider_type?: string
  invocation_role?: string
  logging_role?: string
  tags?: {[key: string]: string}
  url?: string
}

export interface TransferServerAttributes {
  arn: string
  endpoint: string
  endpoint_type?: string
  force_destroy?: boolean
  id: string
  identity_provider_type?: string
  invocation_role?: string
  logging_role?: string
  tags?: {[key: string]: string}
  url?: string
}

export class TransferServer extends Resource<TransferServerArguments, TransferServerAttributes> {
  _kind = 'aws_transfer_server'

  get arn() {
    return this._attr('arn')
  }

  get endpoint() {
    return this._attr('endpoint')
  }

  get endpoint_type() {
    return this._attr('endpoint_type')
  }

  get force_destroy() {
    return this._attr('force_destroy')
  }

  get id() {
    return this._attr('id')
  }

  get identity_provider_type() {
    return this._attr('identity_provider_type')
  }

  get invocation_role() {
    return this._attr('invocation_role')
  }

  get logging_role() {
    return this._attr('logging_role')
  }

  get tags() {
    return this._attr('tags')
  }

  get url() {
    return this._attr('url')
  }
}
