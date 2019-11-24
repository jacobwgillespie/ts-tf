import {Resource} from '../Resource'

export interface SagemakerNotebookInstanceLifecycleConfigurationArguments {
  id?: string
  name?: string
  on_create?: string
  on_start?: string
}

export interface SagemakerNotebookInstanceLifecycleConfigurationAttributes {
  arn: string
  id: string
  name?: string
  on_create?: string
  on_start?: string
}

export class SagemakerNotebookInstanceLifecycleConfiguration extends Resource<
  SagemakerNotebookInstanceLifecycleConfigurationArguments,
  SagemakerNotebookInstanceLifecycleConfigurationAttributes
> {
  _kind = 'aws_sagemaker_notebook_instance_lifecycle_configuration'

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get on_create() {
    return this._attr('on_create')
  }

  get on_start() {
    return this._attr('on_start')
  }
}
