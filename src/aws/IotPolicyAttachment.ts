import {Resource} from '../Resource'

export interface IotPolicyAttachmentArguments {
  id?: string
  policy: string
  target: string
}

export interface IotPolicyAttachmentAttributes {
  id: string
  policy: string
  target: string
}

export class IotPolicyAttachment extends Resource<IotPolicyAttachmentArguments, IotPolicyAttachmentAttributes> {
  _kind = 'aws_iot_policy_attachment'

  get id() {
    return this._attr('id')
  }

  get policy() {
    return this._attr('policy')
  }

  get target() {
    return this._attr('target')
  }
}
