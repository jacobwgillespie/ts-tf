import {Resource} from '../Resource'

export interface EksClusterArguments {
  enabled_cluster_log_types?: Set<string>
  id?: string
  name: string
  role_arn: string
  version?: string
}

export interface EksClusterAttributes {
  arn: string
  certificate_authority: Array<{data: string}>
  created_at: string
  enabled_cluster_log_types?: Set<string>
  endpoint: string
  id: string
  name: string
  platform_version: string
  role_arn: string
  status: string
  version: string
}

export class EksCluster extends Resource<EksClusterArguments, EksClusterAttributes> {
  _kind = 'aws_eks_cluster'

  get arn() {
    return this._attr('arn')
  }

  get certificate_authority() {
    return this._attr('certificate_authority')
  }

  get created_at() {
    return this._attr('created_at')
  }

  get enabled_cluster_log_types() {
    return this._attr('enabled_cluster_log_types')
  }

  get endpoint() {
    return this._attr('endpoint')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get platform_version() {
    return this._attr('platform_version')
  }

  get role_arn() {
    return this._attr('role_arn')
  }

  get status() {
    return this._attr('status')
  }

  get version() {
    return this._attr('version')
  }
}
