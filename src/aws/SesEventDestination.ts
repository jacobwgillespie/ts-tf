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
  kind = 'aws_ses_event_destination'
  _outputAttrNames = ['configuration_set_name', 'enabled', 'id', 'matching_types', 'name'] as const
}
