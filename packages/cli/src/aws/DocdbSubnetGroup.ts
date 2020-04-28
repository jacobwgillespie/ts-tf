import {Resource} from '../Resource'

export interface DocdbSubnetGroupArguments {
  description?: string
  id?: string
  name?: string
  name_prefix?: string
  subnet_ids: Set<string>
  tags?: {[key: string]: string}
}

export interface DocdbSubnetGroupAttributes {
  arn: string
  description?: string
  id: string
  name: string
  name_prefix: string
  subnet_ids: Set<string>
  tags?: {[key: string]: string}
}

export class DocdbSubnetGroup extends Resource<DocdbSubnetGroupArguments, DocdbSubnetGroupAttributes> {
  _kind = 'aws_docdb_subnet_group'

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

  get name_prefix() {
    return this._attr('name_prefix')
  }

  get subnet_ids() {
    return this._attr('subnet_ids')
  }

  get tags() {
    return this._attr('tags')
  }
}
