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
  kind = 'aws_wafregional_size_constraint_set'
  _outputAttrNames = ['id', 'name'] as const
}
