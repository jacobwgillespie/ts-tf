import {Resource} from '../Resource'

export interface CodecommitTriggerArguments {
  id?: string
  repository_name: string
}

export interface CodecommitTriggerAttributes {
  configuration_id: string
  id: string
  repository_name: string
}

export class CodecommitTrigger extends Resource<CodecommitTriggerArguments, CodecommitTriggerAttributes> {
  kind = 'aws_codecommit_trigger'
  _outputAttrNames = ['configuration_id', 'id', 'repository_name'] as const
}
