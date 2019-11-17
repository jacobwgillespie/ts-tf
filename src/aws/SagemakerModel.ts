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
  kind = 'aws_sagemaker_model'
  _outputAttrNames = ['arn', 'enable_network_isolation', 'execution_role_arn', 'id', 'name', 'tags'] as const
}
