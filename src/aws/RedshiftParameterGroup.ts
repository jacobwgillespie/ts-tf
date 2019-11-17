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
  kind = 'aws_redshift_parameter_group'
  _outputAttrNames = ['arn', 'description', 'family', 'id', 'name', 'tags'] as const
}
