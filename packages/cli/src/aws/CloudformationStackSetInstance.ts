import {Resource} from '../Resource'

export interface CloudformationStackSetInstanceArguments {
  account_id?: string
  id?: string
  parameter_overrides?: {[key: string]: string}
  region?: string
  retain_stack?: boolean
  stack_set_name: string
}

export interface CloudformationStackSetInstanceAttributes {
  account_id: string
  id: string
  parameter_overrides?: {[key: string]: string}
  region: string
  retain_stack?: boolean
  stack_id: string
  stack_set_name: string
}

export class CloudformationStackSetInstance extends Resource<
  CloudformationStackSetInstanceArguments,
  CloudformationStackSetInstanceAttributes
> {
  _kind = 'aws_cloudformation_stack_set_instance'

  get account_id() {
    return this._attr('account_id')
  }

  get id() {
    return this._attr('id')
  }

  get parameter_overrides() {
    return this._attr('parameter_overrides')
  }

  get region() {
    return this._attr('region')
  }

  get retain_stack() {
    return this._attr('retain_stack')
  }

  get stack_id() {
    return this._attr('stack_id')
  }

  get stack_set_name() {
    return this._attr('stack_set_name')
  }
}
