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
  kind = 'aws_datapipeline_pipeline'
  _outputAttrNames = ['description', 'id', 'name', 'tags'] as const
}
