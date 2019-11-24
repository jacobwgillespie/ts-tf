import {Resource} from '../Resource'

export interface AlbTargetGroupArguments {
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

export interface AlbTargetGroupAttributes {
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

export class AlbTargetGroup extends Resource<AlbTargetGroupArguments, AlbTargetGroupAttributes> {
  _kind = 'aws_alb_target_group'

  get arn() {
    return this._attr('arn')
  }

  get arn_suffix() {
    return this._attr('arn_suffix')
  }

  get deregistration_delay() {
    return this._attr('deregistration_delay')
  }

  get id() {
    return this._attr('id')
  }

  get lambda_multi_value_headers_enabled() {
    return this._attr('lambda_multi_value_headers_enabled')
  }

  get name() {
    return this._attr('name')
  }

  get name_prefix() {
    return this._attr('name_prefix')
  }

  get port() {
    return this._attr('port')
  }

  get protocol() {
    return this._attr('protocol')
  }

  get proxy_protocol_v2() {
    return this._attr('proxy_protocol_v2')
  }

  get slow_start() {
    return this._attr('slow_start')
  }

  get tags() {
    return this._attr('tags')
  }

  get target_type() {
    return this._attr('target_type')
  }

  get vpc_id() {
    return this._attr('vpc_id')
  }
}
