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
  kind = 'aws_eks_cluster'
  _outputAttrNames = [
    'arn',
    'certificate_authority',
    'created_at',
    'enabled_cluster_log_types',
    'endpoint',
    'id',
    'name',
    'platform_version',
    'role_arn',
    'status',
    'version',
  ] as const
}
