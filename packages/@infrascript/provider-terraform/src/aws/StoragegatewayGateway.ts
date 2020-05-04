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
  _kind = 'aws_storagegateway_gateway'

  get activation_key() {
    return this._attr('activation_key')
  }

  get arn() {
    return this._attr('arn')
  }

  get gateway_id() {
    return this._attr('gateway_id')
  }

  get gateway_ip_address() {
    return this._attr('gateway_ip_address')
  }

  get gateway_name() {
    return this._attr('gateway_name')
  }

  get gateway_timezone() {
    return this._attr('gateway_timezone')
  }

  get gateway_type() {
    return this._attr('gateway_type')
  }

  get id() {
    return this._attr('id')
  }

  get medium_changer_type() {
    return this._attr('medium_changer_type')
  }

  get smb_guest_password() {
    return this._attr('smb_guest_password')
  }

  get tape_drive_type() {
    return this._attr('tape_drive_type')
  }
}
