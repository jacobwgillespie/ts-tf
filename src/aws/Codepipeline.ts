import {Resource} from '../Resource'

export interface CodepipelineArguments {
  id?: string
  name: string
  role_arn: string
  tags?: {[key: string]: string}
}

export interface CodepipelineAttributes {
  arn: string
  id: string
  name: string
  role_arn: string
  tags?: {[key: string]: string}
}

export class Codepipeline extends Resource<CodepipelineArguments, CodepipelineAttributes> {
  kind = 'aws_codepipeline'
  _outputAttrNames = ['arn', 'id', 'name', 'role_arn', 'tags'] as const
}
