import {Resource} from '../Resource'

export interface SagemakerEndpointArguments {
  endpoint_config_name: string
  id?: string
  name?: string
  tags?: {[key: string]: string}
}

export interface SagemakerEndpointAttributes {
  arn: string
  endpoint_config_name: string
  id: string
  name: string
  tags?: {[key: string]: string}
}

export class SagemakerEndpoint extends Resource<SagemakerEndpointArguments, SagemakerEndpointAttributes> {
  kind = 'aws_sagemaker_endpoint'
  _outputAttrNames = ['arn', 'endpoint_config_name', 'id', 'name', 'tags'] as const
}
