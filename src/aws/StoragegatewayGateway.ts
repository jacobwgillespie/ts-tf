import {Resource} from '../Resource'

export interface StoragegatewayGatewayArguments {
  activation_key?: string
  gateway_ip_address?: string
  gateway_name: string
  gateway_timezone: string
  gateway_type?: string
  id?: string
  medium_changer_type?: string
  smb_guest_password?: string
  tape_drive_type?: string
}

export interface StoragegatewayGatewayAttributes {
  activation_key: string
  arn: string
  gateway_id: string
  gateway_ip_address: string
  gateway_name: string
  gateway_timezone: string
  gateway_type?: string
  id: string
  medium_changer_type?: string
  smb_guest_password?: string
  tape_drive_type?: string
}

export class StoragegatewayGateway extends Resource<StoragegatewayGatewayArguments, StoragegatewayGatewayAttributes> {
  kind = 'aws_storagegateway_gateway'
  _outputAttrNames = [
    'activation_key',
    'arn',
    'gateway_id',
    'gateway_ip_address',
    'gateway_name',
    'gateway_timezone',
    'gateway_type',
    'id',
    'medium_changer_type',
    'smb_guest_password',
    'tape_drive_type',
  ] as const
}
