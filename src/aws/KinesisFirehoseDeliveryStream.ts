import {Resource} from '../Resource'

export interface KinesisFirehoseDeliveryStreamArguments {
  arn?: string
  destination: string
  destination_id?: string
  id?: string
  name: string
  tags?: {[key: string]: string}
  version_id?: string
}

export interface KinesisFirehoseDeliveryStreamAttributes {
  arn: string
  destination: string
  destination_id: string
  id: string
  name: string
  tags?: {[key: string]: string}
  version_id: string
}

export class KinesisFirehoseDeliveryStream extends Resource<
  KinesisFirehoseDeliveryStreamArguments,
  KinesisFirehoseDeliveryStreamAttributes
> {
  _kind = 'aws_kinesis_firehose_delivery_stream'

  get arn() {
    return this._attr('arn')
  }

  get destination() {
    return this._attr('destination')
  }

  get destination_id() {
    return this._attr('destination_id')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get tags() {
    return this._attr('tags')
  }

  get version_id() {
    return this._attr('version_id')
  }
}
