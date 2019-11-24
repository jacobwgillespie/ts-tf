import {Resource} from '../Resource'

export interface WafSizeConstraintSetArguments {
  id?: string
  name: string
}

export interface WafSizeConstraintSetAttributes {
  id: string
  name: string
}

export class WafSizeConstraintSet extends Resource<WafSizeConstraintSetArguments, WafSizeConstraintSetAttributes> {
  _kind = 'aws_waf_size_constraint_set'

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }
}
