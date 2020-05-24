import {Resource} from './Resource'

export class Namespace extends Resource<{}> {
  get kind(): 'namespace' {
    return 'namespace'
  }

  constructor(name: string) {
    super(name, {})
  }
}
