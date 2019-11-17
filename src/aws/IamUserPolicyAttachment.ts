import {Resource} from '../Resource'

export interface IamUserPolicyAttachmentArguments {
  id?: string
  policy_arn: string
  user: string
}

export interface IamUserPolicyAttachmentAttributes {
  id: string
  policy_arn: string
  user: string
}

export class IamUserPolicyAttachment extends Resource<
  IamUserPolicyAttachmentArguments,
  IamUserPolicyAttachmentAttributes
> {
  kind = 'aws_iam_user_policy_attachment'
  _outputAttrNames = ['id', 'policy_arn', 'user'] as const
}
