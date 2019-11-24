import {Resource} from '../Resource'

export interface SpotInstanceRequestArguments {
  ami: string
  associate_public_ip_address?: boolean
  availability_zone?: string
  block_duration_minutes?: number
  cpu_core_count?: number
  cpu_threads_per_core?: number
  disable_api_termination?: boolean
  ebs_optimized?: boolean
  get_password_data?: boolean
  host_id?: string
  iam_instance_profile?: string
  id?: string
  instance_initiated_shutdown_behavior?: string
  instance_interruption_behaviour?: string
  instance_type: string
  ipv6_address_count?: number
  ipv6_addresses?: Array<string>
  key_name?: string
  launch_group?: string
  monitoring?: boolean
  placement_group?: string
  private_ip?: string
  security_groups?: Set<string>
  source_dest_check?: boolean
  spot_price?: string
  spot_type?: string
  subnet_id?: string
  tags?: {[key: string]: string}
  tenancy?: string
  user_data?: string
  user_data_base64?: string
  valid_from?: string
  valid_until?: string
  volume_tags?: {[key: string]: string}
  vpc_security_group_ids?: Set<string>
  wait_for_fulfillment?: boolean
}

export interface SpotInstanceRequestAttributes {
  ami: string
  arn: string
  associate_public_ip_address: boolean
  availability_zone: string
  block_duration_minutes?: number
  cpu_core_count: number
  cpu_threads_per_core: number
  disable_api_termination?: boolean
  ebs_optimized?: boolean
  get_password_data?: boolean
  host_id: string
  iam_instance_profile?: string
  id: string
  instance_initiated_shutdown_behavior?: string
  instance_interruption_behaviour?: string
  instance_state: string
  instance_type: string
  ipv6_address_count: number
  ipv6_addresses: Array<string>
  key_name: string
  launch_group?: string
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
  spot_bid_status: string
  spot_instance_id: string
  spot_price?: string
  spot_request_state: string
  spot_type?: string
  subnet_id: string
  tags?: {[key: string]: string}
  tenancy: string
  user_data?: string
  user_data_base64?: string
  valid_from: string
  valid_until: string
  volume_tags?: {[key: string]: string}
  vpc_security_group_ids: Set<string>
  wait_for_fulfillment?: boolean
}

export class SpotInstanceRequest extends Resource<SpotInstanceRequestArguments, SpotInstanceRequestAttributes> {
  _kind = 'aws_spot_instance_request'

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

  get block_duration_minutes() {
    return this._attr('block_duration_minutes')
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

  get instance_interruption_behaviour() {
    return this._attr('instance_interruption_behaviour')
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

  get launch_group() {
    return this._attr('launch_group')
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

  get spot_bid_status() {
    return this._attr('spot_bid_status')
  }

  get spot_instance_id() {
    return this._attr('spot_instance_id')
  }

  get spot_price() {
    return this._attr('spot_price')
  }

  get spot_request_state() {
    return this._attr('spot_request_state')
  }

  get spot_type() {
    return this._attr('spot_type')
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

  get valid_from() {
    return this._attr('valid_from')
  }

  get valid_until() {
    return this._attr('valid_until')
  }

  get volume_tags() {
    return this._attr('volume_tags')
  }

  get vpc_security_group_ids() {
    return this._attr('vpc_security_group_ids')
  }

  get wait_for_fulfillment() {
    return this._attr('wait_for_fulfillment')
  }
}
