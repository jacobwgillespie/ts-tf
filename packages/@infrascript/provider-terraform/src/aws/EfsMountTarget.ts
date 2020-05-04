import {Resource} from '../Resource'

export interface EfsMountTargetArguments {
  file_system_id: string
  id?: string
  ip_address?: string
  security_groups?: Set<string>
  subnet_id: string
}

export interface EfsMountTargetAttributes {
  dns_name: string
  file_system_arn: string
  file_system_id: string
  id: string
  ip_address: string
  network_interface_id: string
  security_groups: Set<string>
  subnet_id: string
}

export class EfsMountTarget extends Resource<EfsMountTargetArguments, EfsMountTargetAttributes> {
  _kind = 'aws_efs_mount_target'

  get dns_name() {
    return this._attr('dns_name')
  }

  get file_system_arn() {
    return this._attr('file_system_arn')
  }

  get file_system_id() {
    return this._attr('file_system_id')
  }

  get id() {
    return this._attr('id')
  }

  get ip_address() {
    return this._attr('ip_address')
  }

  get network_interface_id() {
    return this._attr('network_interface_id')
  }

  get security_groups() {
    return this._attr('security_groups')
  }

  get subnet_id() {
    return this._attr('subnet_id')
  }
}
