import {Resource} from '../Resource'

export interface SagemakerModelArguments {
  enable_network_isolation?: boolean
  execution_role_arn: string
  id?: string
  name?: string
  tags?: {[key: string]: string}
}

export interface SagemakerModelAttributes {
  arn: string
  enable_network_isolation?: boolean
  execution_role_arn: string
  id: string
  name: string
  tags?: {[key: string]: string}
}

export class SagemakerModel extends Resource<SagemakerModelArguments, SagemakerModelAttributes> {
  _kind = 'aws_sagemaker_model'

  get arn() {
    return this._attr('arn')
  }

  get enable_network_isolation() {
    return this._attr('enable_network_isolation')
  }

  get execution_role_arn() {
    return this._attr('execution_role_arn')
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
