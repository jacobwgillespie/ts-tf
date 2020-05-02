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
  _kind = 'aws_codedeploy_deployment_config'

  get compute_platform() {
    return this._attr('compute_platform')
  }

  get deployment_config_id() {
    return this._attr('deployment_config_id')
  }

  get deployment_config_name() {
    return this._attr('deployment_config_name')
  }

  get id() {
    return this._attr('id')
  }
}
