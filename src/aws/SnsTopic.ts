import {Resource} from '../Resource'

export interface SnsTopicArguments {
  application_failure_feedback_role_arn?: string
  application_success_feedback_role_arn?: string
  application_success_feedback_sample_rate?: number
  delivery_policy?: string
  display_name?: string
  http_failure_feedback_role_arn?: string
  http_success_feedback_role_arn?: string
  http_success_feedback_sample_rate?: number
  id?: string
  kms_master_key_id?: string
  lambda_failure_feedback_role_arn?: string
  lambda_success_feedback_role_arn?: string
  lambda_success_feedback_sample_rate?: number
  name?: string
  name_prefix?: string
  policy?: string
  sqs_failure_feedback_role_arn?: string
  sqs_success_feedback_role_arn?: string
  sqs_success_feedback_sample_rate?: number
  tags?: {[key: string]: string}
}

export interface SnsTopicAttributes {
  application_failure_feedback_role_arn?: string
  application_success_feedback_role_arn?: string
  application_success_feedback_sample_rate?: number
  arn: string
  delivery_policy?: string
  display_name?: string
  http_failure_feedback_role_arn?: string
  http_success_feedback_role_arn?: string
  http_success_feedback_sample_rate?: number
  id: string
  kms_master_key_id?: string
  lambda_failure_feedback_role_arn?: string
  lambda_success_feedback_role_arn?: string
  lambda_success_feedback_sample_rate?: number
  name: string
  name_prefix?: string
  policy: string
  sqs_failure_feedback_role_arn?: string
  sqs_success_feedback_role_arn?: string
  sqs_success_feedback_sample_rate?: number
  tags?: {[key: string]: string}
}

export class SnsTopic extends Resource<SnsTopicArguments, SnsTopicAttributes> {
  kind = 'aws_sns_topic'
  _outputAttrNames = [
    'application_failure_feedback_role_arn',
    'application_success_feedback_role_arn',
    'application_success_feedback_sample_rate',
    'arn',
    'delivery_policy',
    'display_name',
    'http_failure_feedback_role_arn',
    'http_success_feedback_role_arn',
    'http_success_feedback_sample_rate',
    'id',
    'kms_master_key_id',
    'lambda_failure_feedback_role_arn',
    'lambda_success_feedback_role_arn',
    'lambda_success_feedback_sample_rate',
    'name',
    'name_prefix',
    'policy',
    'sqs_failure_feedback_role_arn',
    'sqs_success_feedback_role_arn',
    'sqs_success_feedback_sample_rate',
    'tags',
  ] as const
}
