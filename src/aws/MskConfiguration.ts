import {Resource} from '../Resource'

export interface MskConfigurationArguments {
  description?: string
  id?: string
  kafka_versions: Set<string>
  name: string
  server_properties: string
}

export interface MskConfigurationAttributes {
  arn: string
  description?: string
  id: string
  kafka_versions: Set<string>
  latest_revision: number
  name: string
  server_properties: string
}

export class MskConfiguration extends Resource<MskConfigurationArguments, MskConfigurationAttributes> {
  kind = 'aws_msk_configuration'
  _outputAttrNames = [
    'arn',
    'description',
    'id',
    'kafka_versions',
    'latest_revision',
    'name',
    'server_properties',
  ] as const
}
