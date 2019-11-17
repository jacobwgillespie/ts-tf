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
  kind = 'aws_guardduty_invite_accepter'
  _outputAttrNames = ['detector_id', 'id', 'master_account_id'] as const
}
