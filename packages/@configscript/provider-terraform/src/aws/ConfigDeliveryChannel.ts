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
  _kind = 'aws_config_delivery_channel'

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get s3_bucket_name() {
    return this._attr('s3_bucket_name')
  }

  get s3_key_prefix() {
    return this._attr('s3_key_prefix')
  }

  get sns_topic_arn() {
    return this._attr('sns_topic_arn')
  }
}
