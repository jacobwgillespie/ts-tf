import {Resource} from '../Resource'

export interface SnsSmsPreferencesArguments {
  default_sender_id?: string
  default_sms_type?: string
  delivery_status_iam_role_arn?: string
  delivery_status_success_sampling_rate?: string
  id?: string
  monthly_spend_limit?: string
  usage_report_s3_bucket?: string
}

export interface SnsSmsPreferencesAttributes {
  default_sender_id?: string
  default_sms_type?: string
  delivery_status_iam_role_arn?: string
  delivery_status_success_sampling_rate?: string
  id: string
  monthly_spend_limit?: string
  usage_report_s3_bucket?: string
}

export class SnsSmsPreferences extends Resource<SnsSmsPreferencesArguments, SnsSmsPreferencesAttributes> {
  _kind = 'aws_sns_sms_preferences'

  get default_sender_id() {
    return this._attr('default_sender_id')
  }

  get default_sms_type() {
    return this._attr('default_sms_type')
  }

  get delivery_status_iam_role_arn() {
    return this._attr('delivery_status_iam_role_arn')
  }

  get delivery_status_success_sampling_rate() {
    return this._attr('delivery_status_success_sampling_rate')
  }

  get id() {
    return this._attr('id')
  }

  get monthly_spend_limit() {
    return this._attr('monthly_spend_limit')
  }

  get usage_report_s3_bucket() {
    return this._attr('usage_report_s3_bucket')
  }
}
