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
  _kind = 'aws_placement_group'

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get strategy() {
    return this._attr('strategy')
  }
}
