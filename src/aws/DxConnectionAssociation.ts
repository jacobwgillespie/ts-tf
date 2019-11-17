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
  kind = 'aws_dx_connection_association'
  _outputAttrNames = ['connection_id', 'id', 'lag_id'] as const
}
