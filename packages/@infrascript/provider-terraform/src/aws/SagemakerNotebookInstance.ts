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
  _kind = 'aws_sagemaker_notebook_instance'

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get instance_type() {
    return this._attr('instance_type')
  }

  get kms_key_id() {
    return this._attr('kms_key_id')
  }

  get lifecycle_config_name() {
    return this._attr('lifecycle_config_name')
  }

  get name() {
    return this._attr('name')
  }

  get role_arn() {
    return this._attr('role_arn')
  }

  get security_groups() {
    return this._attr('security_groups')
  }

  get subnet_id() {
    return this._attr('subnet_id')
  }

  get tags() {
    return this._attr('tags')
  }
}
