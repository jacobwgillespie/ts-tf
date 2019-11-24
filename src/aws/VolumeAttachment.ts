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
  _kind = 'aws_volume_attachment'

  get device_name() {
    return this._attr('device_name')
  }

  get force_detach() {
    return this._attr('force_detach')
  }

  get id() {
    return this._attr('id')
  }

  get instance_id() {
    return this._attr('instance_id')
  }

  get skip_destroy() {
    return this._attr('skip_destroy')
  }

  get volume_id() {
    return this._attr('volume_id')
  }
}
