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
  kind = 'aws_efs_mount_target'
  _outputAttrNames = [
    'dns_name',
    'file_system_arn',
    'file_system_id',
    'id',
    'ip_address',
    'network_interface_id',
    'security_groups',
    'subnet_id',
  ] as const
}
