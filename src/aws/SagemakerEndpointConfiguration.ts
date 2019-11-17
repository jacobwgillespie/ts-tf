import {Resource} from '../Resource'

export interface SagemakerEndpointConfigurationArguments {
  id?: string
  kms_key_arn?: string
  name?: string
  tags?: {[key: string]: string}
}

export interface SagemakerEndpointConfigurationAttributes {
  arn: string
  id: string
  kms_key_arn?: string
  name: string
  tags?: {[key: string]: string}
}

export class SagemakerEndpointConfiguration extends Resource<
  SagemakerEndpointConfigurationArguments,
  SagemakerEndpointConfigurationAttributes
> {
  kind = 'aws_sagemaker_endpoint_configuration'
  _outputAttrNames = ['arn', 'id', 'kms_key_arn', 'name', 'tags'] as const
}
