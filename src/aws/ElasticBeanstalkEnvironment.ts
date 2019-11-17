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
  kind = 'aws_elastic_beanstalk_environment'
  _outputAttrNames = [
    'all_settings',
    'application',
    'arn',
    'autoscaling_groups',
    'cname',
    'cname_prefix',
    'description',
    'id',
    'instances',
    'launch_configurations',
    'load_balancers',
    'name',
    'platform_arn',
    'poll_interval',
    'queues',
    'solution_stack_name',
    'tags',
    'template_name',
    'tier',
    'triggers',
    'version_label',
    'wait_for_ready_timeout',
  ] as const
}
