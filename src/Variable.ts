import {Resource} from './Resource'

export interface VariableArguments {
  name: string
  type?: string
  description?: string
}

export class Variable extends Resource<VariableArguments, void> {
  kind = 'var'
}
