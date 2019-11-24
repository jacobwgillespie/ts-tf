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
  _kind = 'aws_iam_policy_attachment'

  get groups() {
    return this._attr('groups')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get policy_arn() {
    return this._attr('policy_arn')
  }

  get roles() {
    return this._attr('roles')
  }

  get users() {
    return this._attr('users')
  }
}
