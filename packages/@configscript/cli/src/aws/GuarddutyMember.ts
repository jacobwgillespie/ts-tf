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
  _kind = 'aws_guardduty_member'

  get account_id() {
    return this._attr('account_id')
  }

  get detector_id() {
    return this._attr('detector_id')
  }

  get disable_email_notification() {
    return this._attr('disable_email_notification')
  }

  get email() {
    return this._attr('email')
  }

  get id() {
    return this._attr('id')
  }

  get invitation_message() {
    return this._attr('invitation_message')
  }

  get invite() {
    return this._attr('invite')
  }

  get relationship_status() {
    return this._attr('relationship_status')
  }
}
