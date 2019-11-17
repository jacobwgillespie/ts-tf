import {Resource} from '../Resource'

export interface IamPolicyAttachmentArguments {
  groups?: Set<string>
  id?: string
  name: string
  policy_arn: string
  roles?: Set<string>
  users?: Set<string>
}

export interface IamPolicyAttachmentAttributes {
  groups?: Set<string>
  id: string
  name: string
  policy_arn: string
  roles?: Set<string>
  users?: Set<string>
}

export class IamPolicyAttachment extends Resource<IamPolicyAttachmentArguments, IamPolicyAttachmentAttributes> {
  kind = 'aws_iam_policy_attachment'
  _outputAttrNames = ['groups', 'id', 'name', 'policy_arn', 'roles', 'users'] as const
}
