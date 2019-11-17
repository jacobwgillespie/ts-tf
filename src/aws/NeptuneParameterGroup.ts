import {Resource} from '../Resource'

export interface NeptuneParameterGroupArguments {
  description?: string
  family: string
  id?: string
  name: string
  tags?: {[key: string]: string}
}

export interface NeptuneParameterGroupAttributes {
  arn: string
  description?: string
  family: string
  id: string
  name: string
  tags?: {[key: string]: string}
}

export class NeptuneParameterGroup extends Resource<NeptuneParameterGroupArguments, NeptuneParameterGroupAttributes> {
  kind = 'aws_neptune_parameter_group'
  _outputAttrNames = ['arn', 'description', 'family', 'id', 'name', 'tags'] as const
}
