/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import {Resource} from './Resource'

export interface VariableArguments {
  name: string
  type?: string
  description?: string
}

export class Variable extends Resource<VariableArguments, void> {
  _kind = 'var'
}
