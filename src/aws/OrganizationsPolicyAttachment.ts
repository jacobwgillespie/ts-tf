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
  kind = 'aws_organizations_policy_attachment'
  _outputAttrNames = ['id', 'policy_id', 'target_id'] as const
}
