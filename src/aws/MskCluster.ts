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
  _kind = 'aws_msk_cluster'

  get arn() {
    return this._attr('arn')
  }

  get bootstrap_brokers() {
    return this._attr('bootstrap_brokers')
  }

  get bootstrap_brokers_tls() {
    return this._attr('bootstrap_brokers_tls')
  }

  get cluster_name() {
    return this._attr('cluster_name')
  }

  get current_version() {
    return this._attr('current_version')
  }

  get enhanced_monitoring() {
    return this._attr('enhanced_monitoring')
  }

  get id() {
    return this._attr('id')
  }

  get kafka_version() {
    return this._attr('kafka_version')
  }

  get number_of_broker_nodes() {
    return this._attr('number_of_broker_nodes')
  }

  get tags() {
    return this._attr('tags')
  }

  get zookeeper_connect_string() {
    return this._attr('zookeeper_connect_string')
  }
}
