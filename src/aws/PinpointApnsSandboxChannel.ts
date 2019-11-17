import {Resource} from '../Resource'

export interface PinpointApnsSandboxChannelArguments {
  application_id: string
  bundle_id?: string
  certificate?: string
  default_authentication_method?: string
  enabled?: boolean
  id?: string
  private_key?: string
  team_id?: string
  token_key?: string
  token_key_id?: string
}

export interface PinpointApnsSandboxChannelAttributes {
  application_id: string
  bundle_id?: string
  certificate?: string
  default_authentication_method?: string
  enabled?: boolean
  id: string
  private_key?: string
  team_id?: string
  token_key?: string
  token_key_id?: string
}

export class PinpointApnsSandboxChannel extends Resource<
  PinpointApnsSandboxChannelArguments,
  PinpointApnsSandboxChannelAttributes
> {
  kind = 'aws_pinpoint_apns_sandbox_channel'
  _outputAttrNames = [
    'application_id',
    'bundle_id',
    'certificate',
    'default_authentication_method',
    'enabled',
    'id',
    'private_key',
    'team_id',
    'token_key',
    'token_key_id',
  ] as const
}
