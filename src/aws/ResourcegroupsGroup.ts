import {Resource} from '../Resource'

export interface ResourcegroupsGroupArguments {
  description?: string
  id?: string
  name: string
}

export interface ResourcegroupsGroupAttributes {
  arn: string
  description?: string
  id: string
  name: string
}

export class ResourcegroupsGroup extends Resource<ResourcegroupsGroupArguments, ResourcegroupsGroupAttributes> {
  kind = 'aws_resourcegroups_group'
  _outputAttrNames = ['arn', 'description', 'id', 'name'] as const
}
