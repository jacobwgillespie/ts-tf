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
  _kind = 'aws_codecommit_trigger'

  get configuration_id() {
    return this._attr('configuration_id')
  }

  get id() {
    return this._attr('id')
  }

  get repository_name() {
    return this._attr('repository_name')
  }
}
