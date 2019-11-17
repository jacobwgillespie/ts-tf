import {Resource} from '../Resource'

export interface PinpointApnsVoipSandboxChannelArguments {
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

export interface PinpointApnsVoipSandboxChannelAttributes {
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

export class PinpointApnsVoipSandboxChannel extends Resource<
  PinpointApnsVoipSandboxChannelArguments,
  PinpointApnsVoipSandboxChannelAttributes
> {
  kind = 'aws_pinpoint_apns_voip_sandbox_channel'
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
