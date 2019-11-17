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
  kind = 'aws_ram_resource_share_accepter'
  _outputAttrNames = [
    'id',
    'invitation_arn',
    'receiver_account_id',
    'resources',
    'sender_account_id',
    'share_arn',
    'share_id',
    'share_name',
    'status',
  ] as const
}
