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
  _kind = 'aws_resourcegroups_group'

  get arn() {
    return this._attr('arn')
  }

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }
}
