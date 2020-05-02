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
  _kind = 'aws_dax_parameter_group'

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }
}
