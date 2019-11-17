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
  kind = 'aws_waf_size_constraint_set'
  _outputAttrNames = ['id', 'name'] as const
}
