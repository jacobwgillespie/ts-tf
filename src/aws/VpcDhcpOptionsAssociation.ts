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
  _kind = 'aws_vpc_dhcp_options_association'

  get dhcp_options_id() {
    return this._attr('dhcp_options_id')
  }

  get id() {
    return this._attr('id')
  }

  get vpc_id() {
    return this._attr('vpc_id')
  }
}
