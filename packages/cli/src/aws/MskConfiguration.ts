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
  _kind = 'aws_msk_configuration'

  get arn() {
    return this._attr('arn')
  }

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get kafka_versions() {
    return this._attr('kafka_versions')
  }

  get latest_revision() {
    return this._attr('latest_revision')
  }

  get name() {
    return this._attr('name')
  }

  get server_properties() {
    return this._attr('server_properties')
  }
}
