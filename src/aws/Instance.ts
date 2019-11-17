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
  kind = 'aws_instance'
  _outputAttrNames = [
    'ami',
    'arn',
    'associate_public_ip_address',
    'availability_zone',
    'cpu_core_count',
    'cpu_threads_per_core',
    'disable_api_termination',
    'ebs_optimized',
    'get_password_data',
    'host_id',
    'iam_instance_profile',
    'id',
    'instance_initiated_shutdown_behavior',
    'instance_state',
    'instance_type',
    'ipv6_address_count',
    'ipv6_addresses',
    'key_name',
    'monitoring',
    'network_interface_id',
    'password_data',
    'placement_group',
    'primary_network_interface_id',
    'private_dns',
    'private_ip',
    'public_dns',
    'public_ip',
    'security_groups',
    'source_dest_check',
    'subnet_id',
    'tags',
    'tenancy',
    'user_data',
    'user_data_base64',
    'volume_tags',
    'vpc_security_group_ids',
  ] as const
}