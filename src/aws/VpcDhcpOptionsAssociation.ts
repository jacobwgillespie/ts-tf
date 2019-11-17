import {Resource} from '../Resource'

export interface VpcDhcpOptionsAssociationArguments {
  dhcp_options_id: string
  id?: string
  vpc_id: string
}

export interface VpcDhcpOptionsAssociationAttributes {
  dhcp_options_id: string
  id: string
  vpc_id: string
}

export class VpcDhcpOptionsAssociation extends Resource<
  VpcDhcpOptionsAssociationArguments,
  VpcDhcpOptionsAssociationAttributes
> {
  kind = 'aws_vpc_dhcp_options_association'
  _outputAttrNames = ['dhcp_options_id', 'id', 'vpc_id'] as const
}
