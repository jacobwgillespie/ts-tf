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
  _kind = 'aws_iam_user_policy_attachment'

  get id() {
    return this._attr('id')
  }

  get policy_arn() {
    return this._attr('policy_arn')
  }

  get user() {
    return this._attr('user')
  }
}
