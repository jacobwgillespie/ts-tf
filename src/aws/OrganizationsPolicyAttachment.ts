import {Resource} from '../Resource'

export interface OrganizationsPolicyAttachmentArguments {
  id?: string
  policy_id: string
  target_id: string
}

export interface OrganizationsPolicyAttachmentAttributes {
  id: string
  policy_id: string
  target_id: string
}

export class OrganizationsPolicyAttachment extends Resource<
  OrganizationsPolicyAttachmentArguments,
  OrganizationsPolicyAttachmentAttributes
> {
  _kind = 'aws_organizations_policy_attachment'

  get id() {
    return this._attr('id')
  }

  get policy_id() {
    return this._attr('policy_id')
  }

  get target_id() {
    return this._attr('target_id')
  }
}
