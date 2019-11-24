import {Resource} from '../Resource'

export interface IamGroupPolicyAttachmentArguments {
  group: string
  id?: string
  policy_arn: string
}

export interface IamGroupPolicyAttachmentAttributes {
  group: string
  id: string
  policy_arn: string
}

export class IamGroupPolicyAttachment extends Resource<
  IamGroupPolicyAttachmentArguments,
  IamGroupPolicyAttachmentAttributes
> {
  _kind = 'aws_iam_group_policy_attachment'

  get group() {
    return this._attr('group')
  }

  get id() {
    return this._attr('id')
  }

  get policy_arn() {
    return this._attr('policy_arn')
  }
}
