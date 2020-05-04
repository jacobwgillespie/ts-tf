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
  _kind = 'aws_sns_topic'

  get application_failure_feedback_role_arn() {
    return this._attr('application_failure_feedback_role_arn')
  }

  get application_success_feedback_role_arn() {
    return this._attr('application_success_feedback_role_arn')
  }

  get application_success_feedback_sample_rate() {
    return this._attr('application_success_feedback_sample_rate')
  }

  get arn() {
    return this._attr('arn')
  }

  get delivery_policy() {
    return this._attr('delivery_policy')
  }

  get display_name() {
    return this._attr('display_name')
  }

  get http_failure_feedback_role_arn() {
    return this._attr('http_failure_feedback_role_arn')
  }

  get http_success_feedback_role_arn() {
    return this._attr('http_success_feedback_role_arn')
  }

  get http_success_feedback_sample_rate() {
    return this._attr('http_success_feedback_sample_rate')
  }

  get id() {
    return this._attr('id')
  }

  get kms_master_key_id() {
    return this._attr('kms_master_key_id')
  }

  get lambda_failure_feedback_role_arn() {
    return this._attr('lambda_failure_feedback_role_arn')
  }

  get lambda_success_feedback_role_arn() {
    return this._attr('lambda_success_feedback_role_arn')
  }

  get lambda_success_feedback_sample_rate() {
    return this._attr('lambda_success_feedback_sample_rate')
  }

  get name() {
    return this._attr('name')
  }

  get name_prefix() {
    return this._attr('name_prefix')
  }

  get policy() {
    return this._attr('policy')
  }

  get sqs_failure_feedback_role_arn() {
    return this._attr('sqs_failure_feedback_role_arn')
  }

  get sqs_success_feedback_role_arn() {
    return this._attr('sqs_success_feedback_role_arn')
  }

  get sqs_success_feedback_sample_rate() {
    return this._attr('sqs_success_feedback_sample_rate')
  }

  get tags() {
    return this._attr('tags')
  }
}
