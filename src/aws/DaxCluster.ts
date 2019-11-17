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
  kind = 'aws_dax_cluster'
  _outputAttrNames = [
    'arn',
    'availability_zones',
    'cluster_address',
    'cluster_name',
    'configuration_endpoint',
    'description',
    'iam_role_arn',
    'id',
    'maintenance_window',
    'node_type',
    'nodes',
    'notification_topic_arn',
    'parameter_group_name',
    'port',
    'replication_factor',
    'security_group_ids',
    'subnet_group_name',
    'tags',
  ] as const
}
