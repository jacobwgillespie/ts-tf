interface ResourceOptions {
  readonly protected?: boolean
}

export class Resource {
  readonly #name: string
  readonly #protected: boolean

  constructor(name: string, options: ResourceOptions = {}) {
    this.#name = name
    this.#protected = options.protected ?? false
  }
}
