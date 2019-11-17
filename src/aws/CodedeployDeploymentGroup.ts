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
  kind = 'aws_codedeploy_deployment_group'
  _outputAttrNames = [
    'app_name',
    'autoscaling_groups',
    'deployment_config_name',
    'deployment_group_name',
    'id',
    'service_role_arn',
  ] as const
}
