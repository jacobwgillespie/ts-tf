import {Resource} from '../Resource'

export interface EipArguments {
  associate_with_private_ip?: string
  id?: string
  instance?: string
  network_interface?: string
  public_ipv4_pool?: string
  tags?: {[key: string]: string}
  vpc?: boolean
}

export interface EipAttributes {
  allocation_id: string
  associate_with_private_ip?: string
  association_id: string
  domain: string
  id: string
  instance: string
  network_interface: string
  private_dns: string
  private_ip: string
  public_dns: string
  public_ip: string
  public_ipv4_pool: string
  tags?: {[key: string]: string}
  vpc: boolean
}

export class Eip extends Resource<EipArguments, EipAttributes> {
  kind = 'aws_eip'
  _outputAttrNames = [
    'allocation_id',
    'associate_with_private_ip',
    'association_id',
    'domain',
    'id',
    'instance',
    'network_interface',
    'private_dns',
    'private_ip',
    'public_dns',
    'public_ip',
    'public_ipv4_pool',
    'tags',
    'vpc',
  ] as const
}
