import {Resource} from '../Resource'

export interface MskClusterArguments {
  cluster_name: string
  enhanced_monitoring?: string
  id?: string
  kafka_version: string
  number_of_broker_nodes: number
  tags?: {[key: string]: string}
}

export interface MskClusterAttributes {
  arn: string
  bootstrap_brokers: string
  bootstrap_brokers_tls: string
  cluster_name: string
  current_version: string
  enhanced_monitoring?: string
  id: string
  kafka_version: string
  number_of_broker_nodes: number
  tags?: {[key: string]: string}
  zookeeper_connect_string: string
}

export class MskCluster extends Resource<MskClusterArguments, MskClusterAttributes> {
  kind = 'aws_msk_cluster'
  _outputAttrNames = [
    'arn',
    'bootstrap_brokers',
    'bootstrap_brokers_tls',
    'cluster_name',
    'current_version',
    'enhanced_monitoring',
    'id',
    'kafka_version',
    'number_of_broker_nodes',
    'tags',
    'zookeeper_connect_string',
  ] as const
}
