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
  _kind = 'aws_opsworks_instance'

  get agent_version() {
    return this._attr('agent_version')
  }

  get ami_id() {
    return this._attr('ami_id')
  }

  get architecture() {
    return this._attr('architecture')
  }

  get auto_scaling_type() {
    return this._attr('auto_scaling_type')
  }

  get availability_zone() {
    return this._attr('availability_zone')
  }

  get created_at() {
    return this._attr('created_at')
  }

  get delete_ebs() {
    return this._attr('delete_ebs')
  }

  get delete_eip() {
    return this._attr('delete_eip')
  }

  get ebs_optimized() {
    return this._attr('ebs_optimized')
  }

  get ec2_instance_id() {
    return this._attr('ec2_instance_id')
  }

  get ecs_cluster_arn() {
    return this._attr('ecs_cluster_arn')
  }

  get elastic_ip() {
    return this._attr('elastic_ip')
  }

  get hostname() {
    return this._attr('hostname')
  }

  get id() {
    return this._attr('id')
  }

  get infrastructure_class() {
    return this._attr('infrastructure_class')
  }

  get install_updates_on_boot() {
    return this._attr('install_updates_on_boot')
  }

  get instance_profile_arn() {
    return this._attr('instance_profile_arn')
  }

  get instance_type() {
    return this._attr('instance_type')
  }

  get last_service_error_id() {
    return this._attr('last_service_error_id')
  }

  get layer_ids() {
    return this._attr('layer_ids')
  }

  get os() {
    return this._attr('os')
  }

  get platform() {
    return this._attr('platform')
  }

  get private_dns() {
    return this._attr('private_dns')
  }

  get private_ip() {
    return this._attr('private_ip')
  }

  get public_dns() {
    return this._attr('public_dns')
  }

  get public_ip() {
    return this._attr('public_ip')
  }

  get registered_by() {
    return this._attr('registered_by')
  }

  get reported_agent_version() {
    return this._attr('reported_agent_version')
  }

  get reported_os_family() {
    return this._attr('reported_os_family')
  }

  get reported_os_name() {
    return this._attr('reported_os_name')
  }

  get reported_os_version() {
    return this._attr('reported_os_version')
  }

  get root_device_type() {
    return this._attr('root_device_type')
  }

  get root_device_volume_id() {
    return this._attr('root_device_volume_id')
  }

  get security_group_ids() {
    return this._attr('security_group_ids')
  }

  get ssh_host_dsa_key_fingerprint() {
    return this._attr('ssh_host_dsa_key_fingerprint')
  }

  get ssh_host_rsa_key_fingerprint() {
    return this._attr('ssh_host_rsa_key_fingerprint')
  }

  get ssh_key_name() {
    return this._attr('ssh_key_name')
  }

  get stack_id() {
    return this._attr('stack_id')
  }

  get state() {
    return this._attr('state')
  }

  get status() {
    return this._attr('status')
  }

  get subnet_id() {
    return this._attr('subnet_id')
  }

  get tenancy() {
    return this._attr('tenancy')
  }

  get virtualization_type() {
    return this._attr('virtualization_type')
  }
}
