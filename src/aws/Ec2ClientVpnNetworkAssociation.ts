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
  _kind = 'aws_ec2_client_vpn_network_association'

  get client_vpn_endpoint_id() {
    return this._attr('client_vpn_endpoint_id')
  }

  get id() {
    return this._attr('id')
  }

  get security_groups() {
    return this._attr('security_groups')
  }

  get status() {
    return this._attr('status')
  }

  get subnet_id() {
    return this._attr('subnet_id')
  }

  get vpc_id() {
    return this._attr('vpc_id')
  }
}
