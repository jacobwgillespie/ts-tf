import {Resource} from './Resource'

export interface ModuleArguments {
  source: string
  version?: string
}

export class Module<Arguments = Record<string, any>, Attributes = Record<string, any>> extends Resource<
  ModuleArguments & Arguments,
  Attributes
> {
  _kind = 'module'
}
