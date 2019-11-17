import {Resource} from '../Resource'

export interface OpsworksInstanceArguments {
  agent_version?: string
  ami_id?: string
  architecture?: string
  auto_scaling_type?: string
  availability_zone?: string
  created_at?: string
  delete_ebs?: boolean
  delete_eip?: boolean
  ebs_optimized?: boolean
  ecs_cluster_arn?: string
  elastic_ip?: string
  hostname?: string
  id?: string
  infrastructure_class?: string
  install_updates_on_boot?: boolean
  instance_profile_arn?: string
  instance_type?: string
  last_service_error_id?: string
  layer_ids: Array<string>
  os?: string
  platform?: string
  private_dns?: string
  private_ip?: string
  public_dns?: string
  public_ip?: string
  registered_by?: string
  reported_agent_version?: string
  reported_os_family?: string
  reported_os_name?: string
  reported_os_version?: string
  root_device_type?: string
  root_device_volume_id?: string
  security_group_ids?: Array<string>
  ssh_host_dsa_key_fingerprint?: string
  ssh_host_rsa_key_fingerprint?: string
  ssh_key_name?: string
  stack_id: string
  state?: string
  status?: string
  subnet_id?: string
  tenancy?: string
  virtualization_type?: string
}

export interface OpsworksInstanceAttributes {
  agent_version?: string
  ami_id: string
  architecture?: string
  auto_scaling_type?: string
  availability_zone: string
  created_at: string
  delete_ebs?: boolean
  delete_eip?: boolean
  ebs_optimized?: boolean
  ec2_instance_id: string
  ecs_cluster_arn: string
  elastic_ip: string
  hostname: string
  id: string
  infrastructure_class: string
  install_updates_on_boot?: boolean
  instance_profile_arn: string
  instance_type?: string
  last_service_error_id: string
  layer_ids: Array<string>
  os: string
  platform: string
  private_dns: string
  private_ip: string
  public_dns: string
  public_ip: string
  registered_by: string
  reported_agent_version: string
  reported_os_family: string
  reported_os_name: string
  reported_os_version: string
  root_device_type: string
  root_device_volume_id: string
  security_group_ids: Array<string>
  ssh_host_dsa_key_fingerprint: string
  ssh_host_rsa_key_fingerprint: string
  ssh_key_name: string
  stack_id: string
  state?: string
  status: string
  subnet_id: string
  tenancy: string
  virtualization_type: string
}

export class OpsworksInstance extends Resource<OpsworksInstanceArguments, OpsworksInstanceAttributes> {
  kind = 'aws_opsworks_instance'
  _outputAttrNames = [
    'agent_version',
    'ami_id',
    'architecture',
    'auto_scaling_type',
    'availability_zone',
    'created_at',
    'delete_ebs',
    'delete_eip',
    'ebs_optimized',
    'ec2_instance_id',
    'ecs_cluster_arn',
    'elastic_ip',
    'hostname',
    'id',
    'infrastructure_class',
    'install_updates_on_boot',
    'instance_profile_arn',
    'instance_type',
    'last_service_error_id',
    'layer_ids',
    'os',
    'platform',
    'private_dns',
    'private_ip',
    'public_dns',
    'public_ip',
    'registered_by',
    'reported_agent_version',
    'reported_os_family',
    'reported_os_name',
    'reported_os_version',
    'root_device_type',
    'root_device_volume_id',
    'security_group_ids',
    'ssh_host_dsa_key_fingerprint',
    'ssh_host_rsa_key_fingerprint',
    'ssh_key_name',
    'stack_id',
    'state',
    'status',
    'subnet_id',
    'tenancy',
    'virtualization_type',
  ] as const
}
