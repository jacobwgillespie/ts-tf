import {Resource} from '../Resource'

export interface Route53HealthCheckArguments {
  child_health_threshold?: number
  child_healthchecks?: Set<string>
  cloudwatch_alarm_name?: string
  cloudwatch_alarm_region?: string
  enable_sni?: boolean
  failure_threshold?: number
  fqdn?: string
  id?: string
  insufficient_data_health_status?: string
  invert_healthcheck?: boolean
  ip_address?: string
  measure_latency?: boolean
  port?: number
  reference_name?: string
  regions?: Set<string>
  request_interval?: number
  resource_path?: string
  search_string?: string
  tags?: {[key: string]: string}
  type: string
}

export interface Route53HealthCheckAttributes {
  child_health_threshold?: number
  child_healthchecks?: Set<string>
  cloudwatch_alarm_name?: string
  cloudwatch_alarm_region?: string
  enable_sni: boolean
  failure_threshold?: number
  fqdn?: string
  id: string
  insufficient_data_health_status?: string
  invert_healthcheck?: boolean
  ip_address?: string
  measure_latency?: boolean
  port?: number
  reference_name?: string
  regions?: Set<string>
  request_interval?: number
  resource_path?: string
  search_string?: string
  tags?: {[key: string]: string}
  type: string
}

export class Route53HealthCheck extends Resource<Route53HealthCheckArguments, Route53HealthCheckAttributes> {
  _kind = 'aws_route53_health_check'

  get child_health_threshold() {
    return this._attr('child_health_threshold')
  }

  get child_healthchecks() {
    return this._attr('child_healthchecks')
  }

  get cloudwatch_alarm_name() {
    return this._attr('cloudwatch_alarm_name')
  }

  get cloudwatch_alarm_region() {
    return this._attr('cloudwatch_alarm_region')
  }

  get enable_sni() {
    return this._attr('enable_sni')
  }

  get failure_threshold() {
    return this._attr('failure_threshold')
  }

  get fqdn() {
    return this._attr('fqdn')
  }

  get id() {
    return this._attr('id')
  }

  get insufficient_data_health_status() {
    return this._attr('insufficient_data_health_status')
  }

  get invert_healthcheck() {
    return this._attr('invert_healthcheck')
  }

  get ip_address() {
    return this._attr('ip_address')
  }

  get measure_latency() {
    return this._attr('measure_latency')
  }

  get port() {
    return this._attr('port')
  }

  get reference_name() {
    return this._attr('reference_name')
  }

  get regions() {
    return this._attr('regions')
  }

  get request_interval() {
    return this._attr('request_interval')
  }

  get resource_path() {
    return this._attr('resource_path')
  }

  get search_string() {
    return this._attr('search_string')
  }

  get tags() {
    return this._attr('tags')
  }

  get type() {
    return this._attr('type')
  }
}
