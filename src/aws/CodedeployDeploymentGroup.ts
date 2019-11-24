import {Resource} from '../Resource'

export interface CodedeployDeploymentGroupArguments {
  app_name: string
  autoscaling_groups?: Set<string>
  deployment_config_name?: string
  deployment_group_name: string
  id?: string
  service_role_arn: string
}

export interface CodedeployDeploymentGroupAttributes {
  app_name: string
  autoscaling_groups?: Set<string>
  deployment_config_name?: string
  deployment_group_name: string
  id: string
  service_role_arn: string
}

export class CodedeployDeploymentGroup extends Resource<
  CodedeployDeploymentGroupArguments,
  CodedeployDeploymentGroupAttributes
> {
  _kind = 'aws_codedeploy_deployment_group'

  get app_name() {
    return this._attr('app_name')
  }

  get autoscaling_groups() {
    return this._attr('autoscaling_groups')
  }

  get deployment_config_name() {
    return this._attr('deployment_config_name')
  }

  get deployment_group_name() {
    return this._attr('deployment_group_name')
  }

  get id() {
    return this._attr('id')
  }

  get service_role_arn() {
    return this._attr('service_role_arn')
  }
}
