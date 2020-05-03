import {Resource} from '../Resource'

export interface DatapipelinePipelineArguments {
  description?: string
  id?: string
  name: string
  tags?: {[key: string]: string}
}

export interface DatapipelinePipelineAttributes {
  description?: string
  id: string
  name: string
  tags?: {[key: string]: string}
}

export class DatapipelinePipeline extends Resource<DatapipelinePipelineArguments, DatapipelinePipelineAttributes> {
  _kind = 'aws_datapipeline_pipeline'

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get tags() {
    return this._attr('tags')
  }
}
