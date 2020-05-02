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
  _kind = 'aws_cloudhsm_v2_hsm'

  get availability_zone() {
    return this._attr('availability_zone')
  }

  get cluster_id() {
    return this._attr('cluster_id')
  }

  get hsm_eni_id() {
    return this._attr('hsm_eni_id')
  }

  get hsm_id() {
    return this._attr('hsm_id')
  }

  get hsm_state() {
    return this._attr('hsm_state')
  }

  get id() {
    return this._attr('id')
  }

  get ip_address() {
    return this._attr('ip_address')
  }

  get subnet_id() {
    return this._attr('subnet_id')
  }
}
