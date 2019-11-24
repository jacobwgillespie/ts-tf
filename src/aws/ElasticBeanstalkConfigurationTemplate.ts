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
  _kind = 'aws_elastic_beanstalk_configuration_template'

  get application() {
    return this._attr('application')
  }

  get description() {
    return this._attr('description')
  }

  get environment_id() {
    return this._attr('environment_id')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get solution_stack_name() {
    return this._attr('solution_stack_name')
  }
}
