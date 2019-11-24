import {Resource} from '../Resource'

export interface StoragegatewayCachedIscsiVolumeArguments {
  gateway_arn: string
  id?: string
  network_interface_id: string
  snapshot_id?: string
  source_volume_arn?: string
  target_name: string
  volume_size_in_bytes: number
}

export interface StoragegatewayCachedIscsiVolumeAttributes {
  arn: string
  chap_enabled: boolean
  gateway_arn: string
  id: string
  lun_number: number
  network_interface_id: string
  network_interface_port: number
  snapshot_id?: string
  source_volume_arn?: string
  target_arn: string
  target_name: string
  volume_arn: string
  volume_id: string
  volume_size_in_bytes: number
}

export class StoragegatewayCachedIscsiVolume extends Resource<
  StoragegatewayCachedIscsiVolumeArguments,
  StoragegatewayCachedIscsiVolumeAttributes
> {
  _kind = 'aws_storagegateway_cached_iscsi_volume'

  get arn() {
    return this._attr('arn')
  }

  get chap_enabled() {
    return this._attr('chap_enabled')
  }

  get gateway_arn() {
    return this._attr('gateway_arn')
  }

  get id() {
    return this._attr('id')
  }

  get lun_number() {
    return this._attr('lun_number')
  }

  get network_interface_id() {
    return this._attr('network_interface_id')
  }

  get network_interface_port() {
    return this._attr('network_interface_port')
  }

  get snapshot_id() {
    return this._attr('snapshot_id')
  }

  get source_volume_arn() {
    return this._attr('source_volume_arn')
  }

  get target_arn() {
    return this._attr('target_arn')
  }

  get target_name() {
    return this._attr('target_name')
  }

  get volume_arn() {
    return this._attr('volume_arn')
  }

  get volume_id() {
    return this._attr('volume_id')
  }

  get volume_size_in_bytes() {
    return this._attr('volume_size_in_bytes')
  }
}
