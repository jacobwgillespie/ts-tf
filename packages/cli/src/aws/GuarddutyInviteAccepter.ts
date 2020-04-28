import {Resource} from '../Resource'

export interface GuarddutyInviteAccepterArguments {
  detector_id: string
  id?: string
  master_account_id: string
}

export interface GuarddutyInviteAccepterAttributes {
  detector_id: string
  id: string
  master_account_id: string
}

export class GuarddutyInviteAccepter extends Resource<
  GuarddutyInviteAccepterArguments,
  GuarddutyInviteAccepterAttributes
> {
  _kind = 'aws_guardduty_invite_accepter'

  get detector_id() {
    return this._attr('detector_id')
  }

  get id() {
    return this._attr('id')
  }

  get master_account_id() {
    return this._attr('master_account_id')
  }
}
