import {Resource} from '../Resource'

export interface SfnStateMachineArguments {
  definition: string
  id?: string
  name: string
  role_arn: string
  tags?: {[key: string]: string}
}

export interface SfnStateMachineAttributes {
  creation_date: string
  definition: string
  id: string
  name: string
  role_arn: string
  status: string
  tags?: {[key: string]: string}
}

export class SfnStateMachine extends Resource<SfnStateMachineArguments, SfnStateMachineAttributes> {
  kind = 'aws_sfn_state_machine'
  _outputAttrNames = ['creation_date', 'definition', 'id', 'name', 'role_arn', 'status', 'tags'] as const
}
