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
  _kind = 'aws_cur_report_definition'

  get additional_artifacts() {
    return this._attr('additional_artifacts')
  }

  get additional_schema_elements() {
    return this._attr('additional_schema_elements')
  }

  get compression() {
    return this._attr('compression')
  }

  get format() {
    return this._attr('format')
  }

  get id() {
    return this._attr('id')
  }

  get report_name() {
    return this._attr('report_name')
  }

  get s3_bucket() {
    return this._attr('s3_bucket')
  }

  get s3_prefix() {
    return this._attr('s3_prefix')
  }

  get s3_region() {
    return this._attr('s3_region')
  }

  get time_unit() {
    return this._attr('time_unit')
  }
}
