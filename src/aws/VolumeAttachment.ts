import {Resource} from '../Resource'

export interface VolumeAttachmentArguments {
  device_name: string
  force_detach?: boolean
  id?: string
  instance_id: string
  skip_destroy?: boolean
  volume_id: string
}

export interface VolumeAttachmentAttributes {
  device_name: string
  force_detach?: boolean
  id: string
  instance_id: string
  skip_destroy?: boolean
  volume_id: string
}

export class VolumeAttachment extends Resource<VolumeAttachmentArguments, VolumeAttachmentAttributes> {
  kind = 'aws_volume_attachment'
  _outputAttrNames = ['device_name', 'force_detach', 'id', 'instance_id', 'skip_destroy', 'volume_id'] as const
}
