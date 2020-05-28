import {Resource} from './Resource'

export class Namespace extends Resource<{}> {
  #resources: () => AsyncGenerator<Resource>

  constructor(name: string, resources: () => AsyncGenerator<Resource>) {
    super(name, {})
    this.#resources = resources
  }

  [Symbol.asyncIterator](): AsyncGenerator<Resource> {
    const thisNamespace = this
    return this.$run(async function* () {
      yield thisNamespace
      yield* thisNamespace.#resources()
    })
  }
}
