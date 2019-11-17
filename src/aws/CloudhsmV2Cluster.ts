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
  kind = 'aws_cloudhsm_v2_cluster'
  _outputAttrNames = [
    'cluster_certificates',
    'cluster_id',
    'cluster_state',
    'hsm_type',
    'id',
    'security_group_id',
    'source_backup_identifier',
    'subnet_ids',
    'tags',
    'vpc_id',
  ] as const
}
