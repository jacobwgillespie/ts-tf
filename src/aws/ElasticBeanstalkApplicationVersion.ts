import {Resource} from '../Resource'

export interface ElasticBeanstalkApplicationVersionArguments {
  application: string
  bucket: string
  description?: string
  force_delete?: boolean
  id?: string
  key: string
  name: string
  tags?: {[key: string]: string}
}

export interface ElasticBeanstalkApplicationVersionAttributes {
  application: string
  arn: string
  bucket: string
  description?: string
  force_delete?: boolean
  id: string
  key: string
  name: string
  tags?: {[key: string]: string}
}

export class ElasticBeanstalkApplicationVersion extends Resource<
  ElasticBeanstalkApplicationVersionArguments,
  ElasticBeanstalkApplicationVersionAttributes
> {
  kind = 'aws_elastic_beanstalk_application_version'
  _outputAttrNames = [
    'application',
    'arn',
    'bucket',
    'description',
    'force_delete',
    'id',
    'key',
    'name',
    'tags',
  ] as const
}
