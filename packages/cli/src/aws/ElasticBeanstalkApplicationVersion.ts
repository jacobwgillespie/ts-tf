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
  _kind = 'aws_elastic_beanstalk_application_version'

  get application() {
    return this._attr('application')
  }

  get arn() {
    return this._attr('arn')
  }

  get bucket() {
    return this._attr('bucket')
  }

  get description() {
    return this._attr('description')
  }

  get force_delete() {
    return this._attr('force_delete')
  }

  get id() {
    return this._attr('id')
  }

  get key() {
    return this._attr('key')
  }

  get name() {
    return this._attr('name')
  }

  get tags() {
    return this._attr('tags')
  }
}
