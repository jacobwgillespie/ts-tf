export class Entity {
  #name: string

  constructor(name: string) {
    this.#name = name
  }

  get name(): string {
    return this.#name
  }

  get urn(): string {
    return `urn:infra:entity::${this.#name}`
  }
}
