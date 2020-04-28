import {Resource} from '../Resource'

export interface WafregionalSizeConstraintSetArguments {
  id?: string
  name: string
}

export interface WafregionalSizeConstraintSetAttributes {
  id: string
  name: string
}

export class WafregionalSizeConstraintSet extends Resource<
  WafregionalSizeConstraintSetArguments,
  WafregionalSizeConstraintSetAttributes
> {
  _kind = 'aws_wafregional_size_constraint_set'

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }
}
