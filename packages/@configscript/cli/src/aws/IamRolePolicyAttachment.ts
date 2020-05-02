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
  _kind = 'aws_iam_role_policy_attachment'

  get id() {
    return this._attr('id')
  }

  get policy_arn() {
    return this._attr('policy_arn')
  }

  get role() {
    return this._attr('role')
  }
}
