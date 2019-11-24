import {Resource} from '../Resource'

export interface RamResourceShareAccepterArguments {
  id?: string
  share_arn: string
}

export interface RamResourceShareAccepterAttributes {
  id: string
  invitation_arn: string
  receiver_account_id: string
  resources: Array<string>
  sender_account_id: string
  share_arn: string
  share_id: string
  share_name: string
  status: string
}

export class RamResourceShareAccepter extends Resource<
  RamResourceShareAccepterArguments,
  RamResourceShareAccepterAttributes
> {
  _kind = 'aws_ram_resource_share_accepter'

  get id() {
    return this._attr('id')
  }

  get invitation_arn() {
    return this._attr('invitation_arn')
  }

  get receiver_account_id() {
    return this._attr('receiver_account_id')
  }

  get resources() {
    return this._attr('resources')
  }

  get sender_account_id() {
    return this._attr('sender_account_id')
  }

  get share_arn() {
    return this._attr('share_arn')
  }

  get share_id() {
    return this._attr('share_id')
  }

  get share_name() {
    return this._attr('share_name')
  }

  get status() {
    return this._attr('status')
  }
}
