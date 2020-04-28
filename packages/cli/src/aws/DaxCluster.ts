import {Resource} from '../Resource'

export interface DaxClusterArguments {
  availability_zones?: Set<string>
  cluster_name: string
  description?: string
  iam_role_arn: string
  id?: string
  maintenance_window?: string
  node_type: string
  notification_topic_arn?: string
  parameter_group_name?: string
  replication_factor: number
  security_group_ids?: Set<string>
  subnet_group_name?: string
  tags?: {[key: string]: string}
}

export interface DaxClusterAttributes {
  arn: string
  availability_zones?: Set<string>
  cluster_address: string
  cluster_name: string
  configuration_endpoint: string
  description?: string
  iam_role_arn: string
  id: string
  maintenance_window: string
  node_type: string
  nodes: Array<{address: string; availability_zone: string; id: string; port: number}>
  notification_topic_arn?: string
  parameter_group_name: string
  port: number
  replication_factor: number
  security_group_ids: Set<string>
  subnet_group_name: string
  tags?: {[key: string]: string}
}

export class DaxCluster extends Resource<DaxClusterArguments, DaxClusterAttributes> {
  _kind = 'aws_dax_cluster'

  get arn() {
    return this._attr('arn')
  }

  get availability_zones() {
    return this._attr('availability_zones')
  }

  get cluster_address() {
    return this._attr('cluster_address')
  }

  get cluster_name() {
    return this._attr('cluster_name')
  }

  get configuration_endpoint() {
    return this._attr('configuration_endpoint')
  }

  get description() {
    return this._attr('description')
  }

  get iam_role_arn() {
    return this._attr('iam_role_arn')
  }

  get id() {
    return this._attr('id')
  }

  get maintenance_window() {
    return this._attr('maintenance_window')
  }

  get node_type() {
    return this._attr('node_type')
  }

  get nodes() {
    return this._attr('nodes')
  }

  get notification_topic_arn() {
    return this._attr('notification_topic_arn')
  }

  get parameter_group_name() {
    return this._attr('parameter_group_name')
  }

  get port() {
    return this._attr('port')
  }

  get replication_factor() {
    return this._attr('replication_factor')
  }

  get security_group_ids() {
    return this._attr('security_group_ids')
  }

  get subnet_group_name() {
    return this._attr('subnet_group_name')
  }

  get tags() {
    return this._attr('tags')
  }
}
