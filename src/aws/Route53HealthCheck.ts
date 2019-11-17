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
  kind = 'aws_route53_health_check'
  _outputAttrNames = [
    'child_health_threshold',
    'child_healthchecks',
    'cloudwatch_alarm_name',
    'cloudwatch_alarm_region',
    'enable_sni',
    'failure_threshold',
    'fqdn',
    'id',
    'insufficient_data_health_status',
    'invert_healthcheck',
    'ip_address',
    'measure_latency',
    'port',
    'reference_name',
    'regions',
    'request_interval',
    'resource_path',
    'search_string',
    'tags',
    'type',
  ] as const
}
