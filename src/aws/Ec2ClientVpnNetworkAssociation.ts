import {Resource} from '../Resource'

export interface Ec2ClientVpnNetworkAssociationArguments {
  client_vpn_endpoint_id: string
  id?: string
  subnet_id: string
}

export interface Ec2ClientVpnNetworkAssociationAttributes {
  client_vpn_endpoint_id: string
  id: string
  security_groups: Set<string>
  status: string
  subnet_id: string
  vpc_id: string
}

export class Ec2ClientVpnNetworkAssociation extends Resource<
  Ec2ClientVpnNetworkAssociationArguments,
  Ec2ClientVpnNetworkAssociationAttributes
> {
  kind = 'aws_ec2_client_vpn_network_association'
  _outputAttrNames = ['client_vpn_endpoint_id', 'id', 'security_groups', 'status', 'subnet_id', 'vpc_id'] as const
}
