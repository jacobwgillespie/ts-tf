import {Resource} from '../Resource'

export interface NetworkInterfaceArguments {
  description?: string
  id?: string
  private_ip?: string
  private_ips?: Set<string>
  private_ips_count?: number
  security_groups?: Set<string>
  source_dest_check?: boolean
  subnet_id: string
  tags?: {[key: string]: string}
}

export interface NetworkInterfaceAttributes {
  description?: string
  id: string
  private_dns_name: string
  private_ip: string
  private_ips: Set<string>
  private_ips_count: number
  security_groups: Set<string>
  source_dest_check?: boolean
  subnet_id: string
  tags?: {[key: string]: string}
}

export class NetworkInterface extends Resource<NetworkInterfaceArguments, NetworkInterfaceAttributes> {
  kind = 'aws_network_interface'
  _outputAttrNames = [
    'description',
    'id',
    'private_dns_name',
    'private_ip',
    'private_ips',
    'private_ips_count',
    'security_groups',
    'source_dest_check',
    'subnet_id',
    'tags',
  ] as const
}
