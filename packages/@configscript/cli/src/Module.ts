/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import {Resource} from './Resource'

export interface ModuleArguments {
  source: string
  version?: string
}

export class Module<Arguments, Attributes> extends Resource<ModuleArguments & Arguments, Attributes> {
  _kind = 'module'
}
