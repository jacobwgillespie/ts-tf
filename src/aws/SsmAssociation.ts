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
  kind = 'aws_ssm_association'
  _outputAttrNames = [
    'association_id',
    'association_name',
    'compliance_severity',
    'document_version',
    'id',
    'instance_id',
    'max_concurrency',
    'max_errors',
    'name',
    'parameters',
    'schedule_expression',
  ] as const
}
