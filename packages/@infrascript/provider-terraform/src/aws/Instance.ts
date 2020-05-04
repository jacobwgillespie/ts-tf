import {Resource} from '../Resource'

export interface InstanceArguments {
  ami: string
  associate_public_ip_address?: boolean
  availability_zone?: string
  cpu_core_count?: number
  cpu_threads_per_core?: number
  disable_api_termination?: boolean
  ebs_optimized?: boolean
  get_password_data?: boolean
  host_id?: string
  iam_instance_profile?: string
  id?: string
  instance_initiated_shutdown_behavior?: string
  instance_type: string
  ipv6_address_count?: number
  ipv6_addresses?: Array<string>
  key_name?: string
  monitoring?: boolean
  placement_group?: string
  private_ip?: string
  security_groups?: Set<string>
  source_dest_check?: boolean
  subnet_id?: string
  tags?: {[key: string]: string}
  tenancy?: string
  user_data?: string
  user_data_base64?: string
  volume_tags?: {[key: string]: string}
  vpc_security_group_ids?: Set<string>
}

export interface InstanceAttributes {
  ami: string
  arn: string
  associate_public_ip_address: boolean
  availability_zone: string
  cpu_core_count: number
  cpu_threads_per_core: number
  disable_api_termination?: boolean
  ebs_optimized?: boolean
  get_password_data?: boolean
  host_id: string
  iam_instance_profile?: string
  id: string
  instance_initiated_shutdown_behavior?: string
  instance_state: string
  instance_type: string
  ipv6_address_count: number
  ipv6_addresses: Array<string>
  key_name: string
  monitoring?: boolean
  network_interface_id: string
  password_data: string
  placement_group: string
  primary_network_interface_id: string
  private_dns: string
  private_ip: string
  public_dns: string
  public_ip: string
  security_groups: Set<string>
  source_dest_check?: boolean
  subnet_id: string
  tags?: {[key: string]: string}
  tenancy: string
  user_data?: string
  user_data_base64?: string
  volume_tags: {[key: string]: string}
  vpc_security_group_ids: Set<string>
}

export class Instance extends Resource<InstanceArguments, InstanceAttributes> {
  _kind = 'aws_instance'

  get ami() {
    return this._attr('ami')
  }

  get arn() {
    return this._attr('arn')
  }

  get associate_public_ip_address() {
    return this._attr('associate_public_ip_address')
  }

  get availability_zone() {
    return this._attr('availability_zone')
  }

  get cpu_core_count() {
    return this._attr('cpu_core_count')
  }

  get cpu_threads_per_core() {
    return this._attr('cpu_threads_per_core')
  }

  get disable_api_termination() {
    return this._attr('disable_api_termination')
  }

  get ebs_optimized() {
    return this._attr('ebs_optimized')
  }

  get get_password_data() {
    return this._attr('get_password_data')
  }

  get host_id() {
    return this._attr('host_id')
  }

  get iam_instance_profile() {
    return this._attr('iam_instance_profile')
  }

  get id() {
    return this._attr('id')
  }

  get instance_initiated_shutdown_behavior() {
    return this._attr('instance_initiated_shutdown_behavior')
  }

  get instance_state() {
    return this._attr('instance_state')
  }

  get instance_type() {
    return this._attr('instance_type')
  }

  get ipv6_address_count() {
    return this._attr('ipv6_address_count')
  }

  get ipv6_addresses() {
    return this._attr('ipv6_addresses')
  }

  get key_name() {
    return this._attr('key_name')
  }

  get monitoring() {
    return this._attr('monitoring')
  }

  get network_interface_id() {
    return this._attr('network_interface_id')
  }

  get password_data() {
    return this._attr('password_data')
  }

  get placement_group() {
    return this._attr('placement_group')
  }

  get primary_network_interface_id() {
    return this._attr('primary_network_interface_id')
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

  get security_groups() {
    return this._attr('security_groups')
  }

  get source_dest_check() {
    return this._attr('source_dest_check')
  }

  get subnet_id() {
    return this._attr('subnet_id')
  }

  get tags() {
    return this._attr('tags')
  }

  get tenancy() {
    return this._attr('tenancy')
  }

  get user_data() {
    return this._attr('user_data')
  }

  get user_data_base64() {
    return this._attr('user_data_base64')
  }

  get volume_tags() {
    return this._attr('volume_tags')
  }

  get vpc_security_group_ids() {
    return this._attr('vpc_security_group_ids')
  }
}
