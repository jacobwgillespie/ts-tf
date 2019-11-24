import {Resource} from '../Resource'

export interface SesEventDestinationArguments {
  configuration_set_name: string
  enabled?: boolean
  id?: string
  matching_types: Set<string>
  name: string
}

export interface SesEventDestinationAttributes {
  configuration_set_name: string
  enabled?: boolean
  id: string
  matching_types: Set<string>
  name: string
}

export class SesEventDestination extends Resource<SesEventDestinationArguments, SesEventDestinationAttributes> {
  _kind = 'aws_ses_event_destination'

  get configuration_set_name() {
    return this._attr('configuration_set_name')
  }

  get enabled() {
    return this._attr('enabled')
  }

  get id() {
    return this._attr('id')
  }

  get matching_types() {
    return this._attr('matching_types')
  }

  get name() {
    return this._attr('name')
  }
}
