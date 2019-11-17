import {Resource} from '../Resource'

export interface CloudhsmV2HsmArguments {
  availability_zone?: string
  cluster_id: string
  id?: string
  ip_address?: string
  subnet_id?: string
}

export interface CloudhsmV2HsmAttributes {
  availability_zone: string
  cluster_id: string
  hsm_eni_id: string
  hsm_id: string
  hsm_state: string
  id: string
  ip_address: string
  subnet_id: string
}

export class CloudhsmV2Hsm extends Resource<CloudhsmV2HsmArguments, CloudhsmV2HsmAttributes> {
  kind = 'aws_cloudhsm_v2_hsm'
  _outputAttrNames = [
    'availability_zone',
    'cluster_id',
    'hsm_eni_id',
    'hsm_id',
    'hsm_state',
    'id',
    'ip_address',
    'subnet_id',
  ] as const
}
