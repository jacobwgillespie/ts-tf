import {Resource} from '../Resource'

export interface CloudhsmV2ClusterArguments {
  hsm_type: string
  id?: string
  source_backup_identifier?: string
  subnet_ids: Set<string>
  tags?: {[key: string]: string}
}

export interface CloudhsmV2ClusterAttributes {
  cluster_certificates: Array<{
    aws_hardware_certificate: string
    cluster_certificate: string
    cluster_csr: string
    hsm_certificate: string
    manufacturer_hardware_certificate: string
  }>
  cluster_id: string
  cluster_state: string
  hsm_type: string
  id: string
  security_group_id: string
  source_backup_identifier?: string
  subnet_ids: Set<string>
  tags?: {[key: string]: string}
  vpc_id: string
}

export class CloudhsmV2Cluster extends Resource<CloudhsmV2ClusterArguments, CloudhsmV2ClusterAttributes> {
  _kind = 'aws_cloudhsm_v2_cluster'

  get cluster_certificates() {
    return this._attr('cluster_certificates')
  }

  get cluster_id() {
    return this._attr('cluster_id')
  }

  get cluster_state() {
    return this._attr('cluster_state')
  }

  get hsm_type() {
    return this._attr('hsm_type')
  }

  get id() {
    return this._attr('id')
  }

  get security_group_id() {
    return this._attr('security_group_id')
  }

  get source_backup_identifier() {
    return this._attr('source_backup_identifier')
  }

  get subnet_ids() {
    return this._attr('subnet_ids')
  }

  get tags() {
    return this._attr('tags')
  }

  get vpc_id() {
    return this._attr('vpc_id')
  }
}
