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
  kind = 'aws_iam_group_policy_attachment'
  _outputAttrNames = ['group', 'id', 'policy_arn'] as const
}
