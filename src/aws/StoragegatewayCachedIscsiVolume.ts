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
  kind = 'aws_storagegateway_cached_iscsi_volume'
  _outputAttrNames = [
    'arn',
    'chap_enabled',
    'gateway_arn',
    'id',
    'lun_number',
    'network_interface_id',
    'network_interface_port',
    'snapshot_id',
    'source_volume_arn',
    'target_arn',
    'target_name',
    'volume_arn',
    'volume_id',
    'volume_size_in_bytes',
  ] as const
}
