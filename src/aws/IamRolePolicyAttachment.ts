import {Resource} from '../Resource'

export interface IamRolePolicyAttachmentArguments {
  id?: string
  policy_arn: string
  role: string
}

export interface IamRolePolicyAttachmentAttributes {
  id: string
  policy_arn: string
  role: string
}

export class IamRolePolicyAttachment extends Resource<
  IamRolePolicyAttachmentArguments,
  IamRolePolicyAttachmentAttributes
> {
  kind = 'aws_iam_role_policy_attachment'
  _outputAttrNames = ['id', 'policy_arn', 'role'] as const
}
