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
  _kind = 'aws_globalaccelerator_listener'

  get accelerator_arn() {
    return this._attr('accelerator_arn')
  }

  get client_affinity() {
    return this._attr('client_affinity')
  }

  get id() {
    return this._attr('id')
  }

  get protocol() {
    return this._attr('protocol')
  }
}
