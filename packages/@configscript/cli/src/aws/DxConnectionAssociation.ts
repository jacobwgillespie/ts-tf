import {Resource} from '../Resource'

export interface DxConnectionAssociationArguments {
  connection_id: string
  id?: string
  lag_id: string
}

export interface DxConnectionAssociationAttributes {
  connection_id: string
  id: string
  lag_id: string
}

export class DxConnectionAssociation extends Resource<
  DxConnectionAssociationArguments,
  DxConnectionAssociationAttributes
> {
  _kind = 'aws_dx_connection_association'

  get connection_id() {
    return this._attr('connection_id')
  }

  get id() {
    return this._attr('id')
  }

  get lag_id() {
    return this._attr('lag_id')
  }
}
