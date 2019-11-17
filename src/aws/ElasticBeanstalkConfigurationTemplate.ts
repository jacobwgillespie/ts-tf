import {Resource} from '../Resource'

export interface ElasticBeanstalkConfigurationTemplateArguments {
  application: string
  description?: string
  environment_id?: string
  id?: string
  name: string
  solution_stack_name?: string
}

export interface ElasticBeanstalkConfigurationTemplateAttributes {
  application: string
  description?: string
  environment_id?: string
  id: string
  name: string
  solution_stack_name?: string
}

export class ElasticBeanstalkConfigurationTemplate extends Resource<
  ElasticBeanstalkConfigurationTemplateArguments,
  ElasticBeanstalkConfigurationTemplateAttributes
> {
  kind = 'aws_elastic_beanstalk_configuration_template'
  _outputAttrNames = ['application', 'description', 'environment_id', 'id', 'name', 'solution_stack_name'] as const
}
