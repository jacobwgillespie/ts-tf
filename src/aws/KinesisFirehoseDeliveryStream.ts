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
  kind = 'aws_kinesis_firehose_delivery_stream'
  _outputAttrNames = ['arn', 'destination', 'destination_id', 'id', 'name', 'tags', 'version_id'] as const
}
