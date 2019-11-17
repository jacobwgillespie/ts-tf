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
  kind = 'aws_route53_query_log'
  _outputAttrNames = ['cloudwatch_log_group_arn', 'id', 'zone_id'] as const
}
