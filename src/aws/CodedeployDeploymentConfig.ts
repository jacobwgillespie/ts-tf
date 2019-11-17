import {Resource} from '../Resource'

export interface CodedeployDeploymentConfigArguments {
  compute_platform?: string
  deployment_config_name: string
  id?: string
}

export interface CodedeployDeploymentConfigAttributes {
  compute_platform?: string
  deployment_config_id: string
  deployment_config_name: string
  id: string
}

export class CodedeployDeploymentConfig extends Resource<
  CodedeployDeploymentConfigArguments,
  CodedeployDeploymentConfigAttributes
> {
  kind = 'aws_codedeploy_deployment_config'
  _outputAttrNames = ['compute_platform', 'deployment_config_id', 'deployment_config_name', 'id'] as const
}
