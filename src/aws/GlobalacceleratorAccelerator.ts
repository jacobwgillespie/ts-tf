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
  kind = 'aws_globalaccelerator_accelerator'
  _outputAttrNames = ['enabled', 'id', 'ip_address_type', 'ip_sets', 'name'] as const
}
