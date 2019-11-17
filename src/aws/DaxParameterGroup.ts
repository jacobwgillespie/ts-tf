import {Resource} from '../Resource'

export interface DaxParameterGroupArguments {
  description?: string
  id?: string
  name: string
}

export interface DaxParameterGroupAttributes {
  description?: string
  id: string
  name: string
}

export class DaxParameterGroup extends Resource<DaxParameterGroupArguments, DaxParameterGroupAttributes> {
  kind = 'aws_dax_parameter_group'
  _outputAttrNames = ['description', 'id', 'name'] as const
}
