import {Resource} from '../Resource'

export interface LambdaEventSourceMappingArguments {
  batch_size?: number
  enabled?: boolean
  event_source_arn: string
  function_name: string
  id?: string
  starting_position?: string
  starting_position_timestamp?: string
}

export interface LambdaEventSourceMappingAttributes {
  batch_size?: number
  enabled?: boolean
  event_source_arn: string
  function_arn: string
  function_name: string
  id: string
  last_modified: string
  last_processing_result: string
  starting_position?: string
  starting_position_timestamp?: string
  state: string
  state_transition_reason: string
  uuid: string
}

export class LambdaEventSourceMapping extends Resource<
  LambdaEventSourceMappingArguments,
  LambdaEventSourceMappingAttributes
> {
  _kind = 'aws_lambda_event_source_mapping'

  get batch_size() {
    return this._attr('batch_size')
  }

  get enabled() {
    return this._attr('enabled')
  }

  get event_source_arn() {
    return this._attr('event_source_arn')
  }

  get function_arn() {
    return this._attr('function_arn')
  }

  get function_name() {
    return this._attr('function_name')
  }

  get id() {
    return this._attr('id')
  }

  get last_modified() {
    return this._attr('last_modified')
  }

  get last_processing_result() {
    return this._attr('last_processing_result')
  }

  get starting_position() {
    return this._attr('starting_position')
  }

  get starting_position_timestamp() {
    return this._attr('starting_position_timestamp')
  }

  get state() {
    return this._attr('state')
  }

  get state_transition_reason() {
    return this._attr('state_transition_reason')
  }

  get uuid() {
    return this._attr('uuid')
  }
}
