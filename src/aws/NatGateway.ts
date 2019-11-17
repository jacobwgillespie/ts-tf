import {Resource} from '../Resource'

export interface NatGatewayArguments {
  allocation_id: string
  id?: string
  subnet_id: string
  tags?: {[key: string]: string}
}

export interface NatGatewayAttributes {
  allocation_id: string
  id: string
  network_interface_id: string
  private_ip: string
  public_ip: string
  subnet_id: string
  tags?: {[key: string]: string}
}

export class NatGateway extends Resource<NatGatewayArguments, NatGatewayAttributes> {
  kind = 'aws_nat_gateway'
  _outputAttrNames = [
    'allocation_id',
    'id',
    'network_interface_id',
    'private_ip',
    'public_ip',
    'subnet_id',
    'tags',
  ] as const
}
