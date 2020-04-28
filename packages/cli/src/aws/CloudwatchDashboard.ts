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
  _kind = 'aws_cloudwatch_dashboard'

  get dashboard_arn() {
    return this._attr('dashboard_arn')
  }

  get dashboard_body() {
    return this._attr('dashboard_body')
  }

  get dashboard_name() {
    return this._attr('dashboard_name')
  }

  get id() {
    return this._attr('id')
  }
}
