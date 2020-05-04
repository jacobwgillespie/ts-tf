import {Resource} from '../Resource'

export interface DatasyncAgentArguments {
  activation_key?: string
  id?: string
  ip_address?: string
  name?: string
  tags?: {[key: string]: string}
}

export interface DatasyncAgentAttributes {
  activation_key: string
  arn: string
  id: string
  ip_address: string
  name?: string
  tags?: {[key: string]: string}
}

export class DatasyncAgent extends Resource<DatasyncAgentArguments, DatasyncAgentAttributes> {
  _kind = 'aws_datasync_agent'

  get activation_key() {
    return this._attr('activation_key')
  }

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get ip_address() {
    return this._attr('ip_address')
  }

  get name() {
    return this._attr('name')
  }

  get tags() {
    return this._attr('tags')
  }
}
