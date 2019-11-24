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
  _kind = 'aws_sagemaker_endpoint'

  get arn() {
    return this._attr('arn')
  }

  get endpoint_config_name() {
    return this._attr('endpoint_config_name')
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
