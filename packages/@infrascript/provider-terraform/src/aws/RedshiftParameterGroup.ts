import {Resource} from '../Resource'

export interface RedshiftParameterGroupArguments {
  description?: string
  family: string
  id?: string
  name: string
  tags?: {[key: string]: string}
}

export interface RedshiftParameterGroupAttributes {
  arn: string
  description?: string
  family: string
  id: string
  name: string
  tags?: {[key: string]: string}
}

export class RedshiftParameterGroup extends Resource<
  RedshiftParameterGroupArguments,
  RedshiftParameterGroupAttributes
> {
  _kind = 'aws_redshift_parameter_group'

  get arn() {
    return this._attr('arn')
  }

  get description() {
    return this._attr('description')
  }

  get family() {
    return this._attr('family')
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
