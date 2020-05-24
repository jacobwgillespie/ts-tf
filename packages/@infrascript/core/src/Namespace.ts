import {Resource} from './Resource'

export class Namespace extends Resource<{}> {
  constructor(name: string) {
    super(name, {})
  }
}
