import {Resource} from '../Resource'

export interface GuarddutyMemberArguments {
  account_id: string
  detector_id: string
  disable_email_notification?: boolean
  email: string
  id?: string
  invitation_message?: string
  invite?: boolean
}

export interface GuarddutyMemberAttributes {
  account_id: string
  detector_id: string
  disable_email_notification?: boolean
  email: string
  id: string
  invitation_message?: string
  invite?: boolean
  relationship_status: string
}

export class GuarddutyMember extends Resource<GuarddutyMemberArguments, GuarddutyMemberAttributes> {
  kind = 'aws_guardduty_member'
  _outputAttrNames = [
    'account_id',
    'detector_id',
    'disable_email_notification',
    'email',
    'id',
    'invitation_message',
    'invite',
    'relationship_status',
  ] as const
}
