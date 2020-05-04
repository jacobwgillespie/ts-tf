import {Resource} from '../Resource'

export interface Route53QueryLogArguments {
  cloudwatch_log_group_arn: string
  id?: string
  zone_id: string
}

export interface Route53QueryLogAttributes {
  cloudwatch_log_group_arn: string
  id: string
  zone_id: string
}

export class Route53QueryLog extends Resource<Route53QueryLogArguments, Route53QueryLogAttributes> {
  _kind = 'aws_route53_query_log'

  get cloudwatch_log_group_arn() {
    return this._attr('cloudwatch_log_group_arn')
  }

  get id() {
    return this._attr('id')
  }

  get zone_id() {
    return this._attr('zone_id')
  }
}
