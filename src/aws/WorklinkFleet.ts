import {Resource} from '../Resource'

export interface WorklinkFleetArguments {
  audit_stream_arn?: string
  device_ca_certificate?: string
  display_name?: string
  id?: string
  name: string
  optimize_for_end_user_location?: boolean
}

export interface WorklinkFleetAttributes {
  arn: string
  audit_stream_arn?: string
  company_code: string
  created_time: string
  device_ca_certificate?: string
  display_name?: string
  id: string
  last_updated_time: string
  name: string
  optimize_for_end_user_location?: boolean
}

export class WorklinkFleet extends Resource<WorklinkFleetArguments, WorklinkFleetAttributes> {
  _kind = 'aws_worklink_fleet'

  get arn() {
    return this._attr('arn')
  }

  get audit_stream_arn() {
    return this._attr('audit_stream_arn')
  }

  get company_code() {
    return this._attr('company_code')
  }

  get created_time() {
    return this._attr('created_time')
  }

  get device_ca_certificate() {
    return this._attr('device_ca_certificate')
  }

  get display_name() {
    return this._attr('display_name')
  }

  get id() {
    return this._attr('id')
  }

  get last_updated_time() {
    return this._attr('last_updated_time')
  }

  get name() {
    return this._attr('name')
  }

  get optimize_for_end_user_location() {
    return this._attr('optimize_for_end_user_location')
  }
}
