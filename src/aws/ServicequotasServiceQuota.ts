import {Resource} from '../Resource'

export interface ServicequotasServiceQuotaArguments {
  id?: string
  quota_code: string
  service_code: string
  value: number
}

export interface ServicequotasServiceQuotaAttributes {
  adjustable: boolean
  arn: string
  default_value: number
  id: string
  quota_code: string
  quota_name: string
  request_id: string
  request_status: string
  service_code: string
  service_name: string
  value: number
}

export class ServicequotasServiceQuota extends Resource<
  ServicequotasServiceQuotaArguments,
  ServicequotasServiceQuotaAttributes
> {
  kind = 'aws_servicequotas_service_quota'
  _outputAttrNames = [
    'adjustable',
    'arn',
    'default_value',
    'id',
    'quota_code',
    'quota_name',
    'request_id',
    'request_status',
    'service_code',
    'service_name',
    'value',
  ] as const
}
