import {Resource} from '../Resource'

export interface CloudwatchDashboardArguments {
  dashboard_body: string
  dashboard_name: string
  id?: string
}

export interface CloudwatchDashboardAttributes {
  dashboard_arn: string
  dashboard_body: string
  dashboard_name: string
  id: string
}

export class CloudwatchDashboard extends Resource<CloudwatchDashboardArguments, CloudwatchDashboardAttributes> {
  kind = 'aws_cloudwatch_dashboard'
  _outputAttrNames = ['dashboard_arn', 'dashboard_body', 'dashboard_name', 'id'] as const
}
