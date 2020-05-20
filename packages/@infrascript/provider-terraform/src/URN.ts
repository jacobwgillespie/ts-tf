const REGEXP = new RegExp('urn:([a-zA-Z0-9][a-zA-Z0-9-]{1,31}):()')

export class URN {
  static parse(string: string): URN {
    const matches = REGEXP.exec(string)
    if (!matches) {
      throw new TypeError(`Invalid URN: ${string}`)
    }

    return new URN()
  }
}
