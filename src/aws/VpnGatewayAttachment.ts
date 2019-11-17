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
  kind = 'aws_vpn_gateway_attachment'
  _outputAttrNames = ['id', 'vpc_id', 'vpn_gateway_id'] as const
}
