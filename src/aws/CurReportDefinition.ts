import {Resource} from '../Resource'

export interface CurReportDefinitionArguments {
  additional_artifacts?: Set<string>
  additional_schema_elements: Set<string>
  compression: string
  format: string
  id?: string
  report_name: string
  s3_bucket: string
  s3_prefix?: string
  s3_region: string
  time_unit: string
}

export interface CurReportDefinitionAttributes {
  additional_artifacts?: Set<string>
  additional_schema_elements: Set<string>
  compression: string
  format: string
  id: string
  report_name: string
  s3_bucket: string
  s3_prefix?: string
  s3_region: string
  time_unit: string
}

export class CurReportDefinition extends Resource<CurReportDefinitionArguments, CurReportDefinitionAttributes> {
  kind = 'aws_cur_report_definition'
  _outputAttrNames = [
    'additional_artifacts',
    'additional_schema_elements',
    'compression',
    'format',
    'id',
    'report_name',
    's3_bucket',
    's3_prefix',
    's3_region',
    'time_unit',
  ] as const
}
