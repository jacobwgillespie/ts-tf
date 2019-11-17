import {Resource} from '../Resource'

export interface GlobalacceleratorListenerArguments {
  accelerator_arn: string
  client_affinity?: string
  id?: string
  protocol: string
}

export interface GlobalacceleratorListenerAttributes {
  accelerator_arn: string
  client_affinity?: string
  id: string
  protocol: string
}

export class GlobalacceleratorListener extends Resource<
  GlobalacceleratorListenerArguments,
  GlobalacceleratorListenerAttributes
> {
  kind = 'aws_globalaccelerator_listener'
  _outputAttrNames = ['accelerator_arn', 'client_affinity', 'id', 'protocol'] as const
}
