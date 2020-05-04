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
  _kind = 'aws_servicequotas_service_quota'

  get adjustable() {
    return this._attr('adjustable')
  }

  get arn() {
    return this._attr('arn')
  }

  get default_value() {
    return this._attr('default_value')
  }

  get id() {
    return this._attr('id')
  }

  get quota_code() {
    return this._attr('quota_code')
  }

  get quota_name() {
    return this._attr('quota_name')
  }

  get request_id() {
    return this._attr('request_id')
  }

  get request_status() {
    return this._attr('request_status')
  }

  get service_code() {
    return this._attr('service_code')
  }

  get service_name() {
    return this._attr('service_name')
  }

  get value() {
    return this._attr('value')
  }
}
