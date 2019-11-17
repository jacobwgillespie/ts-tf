import {Resource} from '../Resource'

export interface GlueTriggerArguments {
  description?: string
  enabled?: boolean
  id?: string
  name: string
  schedule?: string
  type: string
}

export interface GlueTriggerAttributes {
  description?: string
  enabled?: boolean
  id: string
  name: string
  schedule?: string
  type: string
}

export class GlueTrigger extends Resource<GlueTriggerArguments, GlueTriggerAttributes> {
  kind = 'aws_glue_trigger'
  _outputAttrNames = ['description', 'enabled', 'id', 'name', 'schedule', 'type'] as const
}
