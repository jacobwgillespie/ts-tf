import {Resource} from '../Resource'

export interface BatchJobDefinitionArguments {
  container_properties?: string
  id?: string
  name: string
  parameters?: {[key: string]: string}
  type: string
}

export interface BatchJobDefinitionAttributes {
  arn: string
  container_properties?: string
  id: string
  name: string
  parameters?: {[key: string]: string}
  revision: number
  type: string
}

export class BatchJobDefinition extends Resource<BatchJobDefinitionArguments, BatchJobDefinitionAttributes> {
  _kind = 'aws_batch_job_definition'

  get arn() {
    return this._attr('arn')
  }

  get container_properties() {
    return this._attr('container_properties')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get parameters() {
    return this._attr('parameters')
  }

  get revision() {
    return this._attr('revision')
  }

  get type() {
    return this._attr('type')
  }
}
