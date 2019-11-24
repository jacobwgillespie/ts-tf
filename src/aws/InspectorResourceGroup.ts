import {Resource} from '../Resource'

export interface InspectorResourceGroupArguments {
  id?: string
  tags: {[key: string]: string}
}

export interface InspectorResourceGroupAttributes {
  arn: string
  id: string
  tags: {[key: string]: string}
}

export class InspectorResourceGroup extends Resource<
  InspectorResourceGroupArguments,
  InspectorResourceGroupAttributes
> {
  _kind = 'aws_inspector_resource_group'

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get tags() {
    return this._attr('tags')
  }
}
