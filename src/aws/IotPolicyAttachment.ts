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
  kind = 'aws_iot_policy_attachment'
  _outputAttrNames = ['id', 'policy', 'target'] as const
}
