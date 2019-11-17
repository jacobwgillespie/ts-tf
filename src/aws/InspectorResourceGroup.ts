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
  kind = 'aws_inspector_resource_group'
  _outputAttrNames = ['arn', 'id', 'tags'] as const
}
