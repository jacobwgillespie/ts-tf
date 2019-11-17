import {Resource} from '../Resource'

export interface EipAssociationArguments {
  allocation_id?: string
  allow_reassociation?: boolean
  id?: string
  instance_id?: string
  network_interface_id?: string
  private_ip_address?: string
  public_ip?: string
}

export interface EipAssociationAttributes {
  allocation_id: string
  allow_reassociation?: boolean
  id: string
  instance_id: string
  network_interface_id: string
  private_ip_address: string
  public_ip: string
}

export class EipAssociation extends Resource<EipAssociationArguments, EipAssociationAttributes> {
  kind = 'aws_eip_association'
  _outputAttrNames = [
    'allocation_id',
    'allow_reassociation',
    'id',
    'instance_id',
    'network_interface_id',
    'private_ip_address',
    'public_ip',
  ] as const
}
