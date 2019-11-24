import {Resource} from '../Resource'

export interface GlobalacceleratorAcceleratorArguments {
  enabled?: boolean
  id?: string
  ip_address_type?: string
  name: string
}

export interface GlobalacceleratorAcceleratorAttributes {
  enabled?: boolean
  id: string
  ip_address_type?: string
  ip_sets: Array<{ip_addresses: Array<string>; ip_family: string}>
  name: string
}

export class GlobalacceleratorAccelerator extends Resource<
  GlobalacceleratorAcceleratorArguments,
  GlobalacceleratorAcceleratorAttributes
> {
  _kind = 'aws_globalaccelerator_accelerator'

  get enabled() {
    return this._attr('enabled')
  }

  get id() {
    return this._attr('id')
  }

  get ip_address_type() {
    return this._attr('ip_address_type')
  }

  get ip_sets() {
    return this._attr('ip_sets')
  }

  get name() {
    return this._attr('name')
  }
}
