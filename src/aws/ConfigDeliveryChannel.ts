import {Resource} from '../Resource'

export interface ConfigDeliveryChannelArguments {
  id?: string
  name?: string
  s3_bucket_name: string
  s3_key_prefix?: string
  sns_topic_arn?: string
}

export interface ConfigDeliveryChannelAttributes {
  id: string
  name?: string
  s3_bucket_name: string
  s3_key_prefix?: string
  sns_topic_arn?: string
}

export class ConfigDeliveryChannel extends Resource<ConfigDeliveryChannelArguments, ConfigDeliveryChannelAttributes> {
  kind = 'aws_config_delivery_channel'
  _outputAttrNames = ['id', 'name', 's3_bucket_name', 's3_key_prefix', 'sns_topic_arn'] as const
}
