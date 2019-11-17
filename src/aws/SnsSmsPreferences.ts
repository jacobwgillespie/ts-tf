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
  kind = 'aws_sns_sms_preferences'
  _outputAttrNames = [
    'default_sender_id',
    'default_sms_type',
    'delivery_status_iam_role_arn',
    'delivery_status_success_sampling_rate',
    'id',
    'monthly_spend_limit',
    'usage_report_s3_bucket',
  ] as const
}
