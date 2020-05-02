/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import {Resource} from './Resource'

export interface OutputArguments<T> {
  value: T
  type?: string
  description?: string
}

export class Output<T> extends Resource<OutputArguments<T>, any> {
  _kind = 'output'
}
