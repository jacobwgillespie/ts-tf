import {Resource} from '../Resource'

export interface LbTargetGroupArguments {
  deregistration_delay?: number
  id?: string
  lambda_multi_value_headers_enabled?: boolean
  name?: string
  name_prefix?: string
  port?: number
  protocol?: string
  proxy_protocol_v2?: boolean
  slow_start?: number
  tags?: {[key: string]: string}
  target_type?: string
  vpc_id?: string
}

export interface LbTargetGroupAttributes {
  arn: string
  arn_suffix: string
  deregistration_delay?: number
  id: string
  lambda_multi_value_headers_enabled?: boolean
  name: string
  name_prefix?: string
  port?: number
  protocol?: string
  proxy_protocol_v2?: boolean
  slow_start?: number
  tags?: {[key: string]: string}
  target_type?: string
  vpc_id?: string
}

export class LbTargetGroup extends Resource<LbTargetGroupArguments, LbTargetGroupAttributes> {
  kind = 'aws_lb_target_group'
  _outputAttrNames = [
    'arn',
    'arn_suffix',
    'deregistration_delay',
    'id',
    'lambda_multi_value_headers_enabled',
    'name',
    'name_prefix',
    'port',
    'protocol',
    'proxy_protocol_v2',
    'slow_start',
    'tags',
    'target_type',
    'vpc_id',
  ] as const
}
