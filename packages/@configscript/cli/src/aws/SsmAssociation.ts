import {Resource} from '../Resource'

export interface SsmAssociationArguments {
  association_name?: string
  compliance_severity?: string
  document_version?: string
  id?: string
  instance_id?: string
  max_concurrency?: string
  max_errors?: string
  name: string
  parameters?: {[key: string]: string}
  schedule_expression?: string
}

export interface SsmAssociationAttributes {
  association_id: string
  association_name?: string
  compliance_severity?: string
  document_version: string
  id: string
  instance_id?: string
  max_concurrency?: string
  max_errors?: string
  name: string
  parameters: {[key: string]: string}
  schedule_expression?: string
}

export class SsmAssociation extends Resource<SsmAssociationArguments, SsmAssociationAttributes> {
  _kind = 'aws_ssm_association'

  get association_id() {
    return this._attr('association_id')
  }

  get association_name() {
    return this._attr('association_name')
  }

  get compliance_severity() {
    return this._attr('compliance_severity')
  }

  get document_version() {
    return this._attr('document_version')
  }

  get id() {
    return this._attr('id')
  }

  get instance_id() {
    return this._attr('instance_id')
  }

  get max_concurrency() {
    return this._attr('max_concurrency')
  }

  get max_errors() {
    return this._attr('max_errors')
  }

  get name() {
    return this._attr('name')
  }

  get parameters() {
    return this._attr('parameters')
  }

  get schedule_expression() {
    return this._attr('schedule_expression')
  }
}
