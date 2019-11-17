import {Resource} from '../Resource'

export interface PlacementGroupArguments {
  id?: string
  name: string
  strategy: string
}

export interface PlacementGroupAttributes {
  id: string
  name: string
  strategy: string
}

export class PlacementGroup extends Resource<PlacementGroupArguments, PlacementGroupAttributes> {
  kind = 'aws_placement_group'
  _outputAttrNames = ['id', 'name', 'strategy'] as const
}
