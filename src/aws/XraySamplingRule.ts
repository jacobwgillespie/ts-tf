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
  kind = 'aws_xray_sampling_rule'
  _outputAttrNames = [
    'arn',
    'attributes',
    'fixed_rate',
    'host',
    'http_method',
    'id',
    'priority',
    'reservoir_size',
    'resource_arn',
    'rule_name',
    'service_name',
    'service_type',
    'url_path',
    'version',
  ] as const
}
