declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace TerraformProviders {
    interface Schema {
      __: string
      // to be filled by generated types
    }
  }
}

export class Provider<
  Name extends string,
  Version extends string,
  Schema = Name extends keyof TerraformProviders.Schema ? TerraformProviders.Schema[Name] : object
> {
  constructor(public name: Name, public version: Version) {}

  resources(): Schema {
    return {} as Schema
  }
}
