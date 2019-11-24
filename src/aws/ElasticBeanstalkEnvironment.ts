import {Resource} from '../Resource'

export interface ElasticBeanstalkEnvironmentArguments {
  application: string
  cname_prefix?: string
  description?: string
  id?: string
  name: string
  platform_arn?: string
  poll_interval?: string
  solution_stack_name?: string
  tags?: {[key: string]: string}
  template_name?: string
  tier?: string
  version_label?: string
  wait_for_ready_timeout?: string
}

export interface ElasticBeanstalkEnvironmentAttributes {
  all_settings: Set<{name: string; namespace: string; resource: string; value: string}>
  application: string
  arn: string
  autoscaling_groups: Array<string>
  cname: string
  cname_prefix: string
  description?: string
  id: string
  instances: Array<string>
  launch_configurations: Array<string>
  load_balancers: Array<string>
  name: string
  platform_arn: string
  poll_interval?: string
  queues: Array<string>
  solution_stack_name: string
  tags?: {[key: string]: string}
  template_name?: string
  tier?: string
  triggers: Array<string>
  version_label: string
  wait_for_ready_timeout?: string
}

export class ElasticBeanstalkEnvironment extends Resource<
  ElasticBeanstalkEnvironmentArguments,
  ElasticBeanstalkEnvironmentAttributes
> {
  _kind = 'aws_elastic_beanstalk_environment'

  get all_settings() {
    return this._attr('all_settings')
  }

  get application() {
    return this._attr('application')
  }

  get arn() {
    return this._attr('arn')
  }

  get autoscaling_groups() {
    return this._attr('autoscaling_groups')
  }

  get cname() {
    return this._attr('cname')
  }

  get cname_prefix() {
    return this._attr('cname_prefix')
  }

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get instances() {
    return this._attr('instances')
  }

  get launch_configurations() {
    return this._attr('launch_configurations')
  }

  get load_balancers() {
    return this._attr('load_balancers')
  }

  get name() {
    return this._attr('name')
  }

  get platform_arn() {
    return this._attr('platform_arn')
  }

  get poll_interval() {
    return this._attr('poll_interval')
  }

  get queues() {
    return this._attr('queues')
  }

  get solution_stack_name() {
    return this._attr('solution_stack_name')
  }

  get tags() {
    return this._attr('tags')
  }

  get template_name() {
    return this._attr('template_name')
  }

  get tier() {
    return this._attr('tier')
  }

  get triggers() {
    return this._attr('triggers')
  }

  get version_label() {
    return this._attr('version_label')
  }

  get wait_for_ready_timeout() {
    return this._attr('wait_for_ready_timeout')
  }
}
