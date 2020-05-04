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
  _kind = 'aws_sagemaker_endpoint_configuration'

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get kms_key_arn() {
    return this._attr('kms_key_arn')
  }

  get name() {
    return this._attr('name')
  }

  get tags() {
    return this._attr('tags')
  }
}
