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
  kind = 'aws_batch_job_definition'
  _outputAttrNames = ['arn', 'container_properties', 'id', 'name', 'parameters', 'revision', 'type'] as const
}
