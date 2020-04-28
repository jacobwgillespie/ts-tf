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
  _kind = 'aws_elastic_beanstalk_application'

  get arn() {
    return this._attr('arn')
  }

  get description() {
    return this._attr('description')
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
}
