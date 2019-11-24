import {Resource} from '../Resource'

export interface XraySamplingRuleArguments {
  attributes?: {[key: string]: string}
  fixed_rate: number
  host: string
  http_method: string
  id?: string
  priority: number
  reservoir_size: number
  resource_arn: string
  rule_name?: string
  service_name: string
  service_type: string
  url_path: string
  version: number
}

export interface XraySamplingRuleAttributes {
  arn: string
  attributes?: {[key: string]: string}
  fixed_rate: number
  host: string
  http_method: string
  id: string
  priority: number
  reservoir_size: number
  resource_arn: string
  rule_name?: string
  service_name: string
  service_type: string
  url_path: string
  version: number
}

export class XraySamplingRule extends Resource<XraySamplingRuleArguments, XraySamplingRuleAttributes> {
  _kind = 'aws_xray_sampling_rule'

  get arn() {
    return this._attr('arn')
  }

  get attributes() {
    return this._attr('attributes')
  }

  get fixed_rate() {
    return this._attr('fixed_rate')
  }

  get host() {
    return this._attr('host')
  }

  get http_method() {
    return this._attr('http_method')
  }

  get id() {
    return this._attr('id')
  }

  get priority() {
    return this._attr('priority')
  }

  get reservoir_size() {
    return this._attr('reservoir_size')
  }

  get resource_arn() {
    return this._attr('resource_arn')
  }

  get rule_name() {
    return this._attr('rule_name')
  }

  get service_name() {
    return this._attr('service_name')
  }

  get service_type() {
    return this._attr('service_type')
  }

  get url_path() {
    return this._attr('url_path')
  }

  get version() {
    return this._attr('version')
  }
}
