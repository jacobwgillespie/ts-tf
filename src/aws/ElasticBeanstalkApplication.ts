import {Resource} from '../Resource'

export interface ElasticBeanstalkApplicationArguments {
  description?: string
  id?: string
  name: string
  tags?: {[key: string]: string}
}

export interface ElasticBeanstalkApplicationAttributes {
  arn: string
  description?: string
  id: string
  name: string
  tags?: {[key: string]: string}
}

export class ElasticBeanstalkApplication extends Resource<
  ElasticBeanstalkApplicationArguments,
  ElasticBeanstalkApplicationAttributes
> {
  kind = 'aws_elastic_beanstalk_application'
  _outputAttrNames = ['arn', 'description', 'id', 'name', 'tags'] as const
}
