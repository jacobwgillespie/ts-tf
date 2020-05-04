import {Resource} from '../Resource'

export interface RedshiftSubnetGroupArguments {
  description?: string
  id?: string
  name: string
  subnet_ids: Set<string>
  tags?: {[key: string]: string}
}

export interface RedshiftSubnetGroupAttributes {
  arn: string
  description?: string
  id: string
  name: string
  subnet_ids: Set<string>
  tags?: {[key: string]: string}
}

export class RedshiftSubnetGroup extends Resource<RedshiftSubnetGroupArguments, RedshiftSubnetGroupAttributes> {
  _kind = 'aws_redshift_subnet_group'

  get arn() {
    return this._attr('arn')
  }

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get subnet_ids() {
    return this._attr('subnet_ids')
  }

  get tags() {
    return this._attr('tags')
  }
}
