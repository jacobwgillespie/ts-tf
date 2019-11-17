import {Resource} from '../Resource'

export interface SagemakerNotebookInstanceArguments {
  id?: string
  instance_type: string
  kms_key_id?: string
  lifecycle_config_name?: string
  name: string
  role_arn: string
  security_groups?: Set<string>
  subnet_id?: string
  tags?: {[key: string]: string}
}

export interface SagemakerNotebookInstanceAttributes {
  arn: string
  id: string
  instance_type: string
  kms_key_id?: string
  lifecycle_config_name?: string
  name: string
  role_arn: string
  security_groups: Set<string>
  subnet_id?: string
  tags?: {[key: string]: string}
}

export class SagemakerNotebookInstance extends Resource<
  SagemakerNotebookInstanceArguments,
  SagemakerNotebookInstanceAttributes
> {
  kind = 'aws_sagemaker_notebook_instance'
  _outputAttrNames = [
    'arn',
    'id',
    'instance_type',
    'kms_key_id',
    'lifecycle_config_name',
    'name',
    'role_arn',
    'security_groups',
    'subnet_id',
    'tags',
  ] as const
}
