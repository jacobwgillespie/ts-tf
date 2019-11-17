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
  kind = 'aws_sagemaker_notebook_instance_lifecycle_configuration'
  _outputAttrNames = ['arn', 'id', 'name', 'on_create', 'on_start'] as const
}
