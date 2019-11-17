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
  kind = 'aws_worklink_fleet'
  _outputAttrNames = [
    'arn',
    'audit_stream_arn',
    'company_code',
    'created_time',
    'device_ca_certificate',
    'display_name',
    'id',
    'last_updated_time',
    'name',
    'optimize_for_end_user_location',
  ] as const
}
