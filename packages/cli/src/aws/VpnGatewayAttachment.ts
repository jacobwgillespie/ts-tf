import {Resource} from '../Resource'

export interface VpnGatewayAttachmentArguments {
  id?: string
  vpc_id: string
  vpn_gateway_id: string
}

export interface VpnGatewayAttachmentAttributes {
  id: string
  vpc_id: string
  vpn_gateway_id: string
}

export class VpnGatewayAttachment extends Resource<VpnGatewayAttachmentArguments, VpnGatewayAttachmentAttributes> {
  _kind = 'aws_vpn_gateway_attachment'

  get id() {
    return this._attr('id')
  }

  get vpc_id() {
    return this._attr('vpc_id')
  }

  get vpn_gateway_id() {
    return this._attr('vpn_gateway_id')
  }
}
