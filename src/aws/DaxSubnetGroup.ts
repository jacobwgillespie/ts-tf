import {Resource} from '../Resource'

export interface DaxSubnetGroupArguments {
  description?: string
  id?: string
  name: string
  subnet_ids: Set<string>
}

export interface DaxSubnetGroupAttributes {
  description?: string
  id: string
  name: string
  subnet_ids: Set<string>
  vpc_id: string
}

export class DaxSubnetGroup extends Resource<DaxSubnetGroupArguments, DaxSubnetGroupAttributes> {
  _kind = 'aws_dax_subnet_group'

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

  get vpc_id() {
    return this._attr('vpc_id')
  }
}
