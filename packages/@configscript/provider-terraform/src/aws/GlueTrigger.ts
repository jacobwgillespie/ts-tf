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
  _kind = 'aws_glue_trigger'

  get description() {
    return this._attr('description')
  }

  get enabled() {
    return this._attr('enabled')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get schedule() {
    return this._attr('schedule')
  }

  get type() {
    return this._attr('type')
  }
}
