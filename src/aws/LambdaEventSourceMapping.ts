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
  kind = 'aws_lambda_event_source_mapping'
  _outputAttrNames = [
    'batch_size',
    'enabled',
    'event_source_arn',
    'function_arn',
    'function_name',
    'id',
    'last_modified',
    'last_processing_result',
    'starting_position',
    'starting_position_timestamp',
    'state',
    'state_transition_reason',
    'uuid',
  ] as const
}
