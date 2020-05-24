export class InfraScriptError extends Error {
  constructor(message?: string) {
    super(message)
    Object.setPrototypeOf(this, new.target.prototype)
  }
}

export class ContextMissingError extends InfraScriptError {
  constructor() {
    super(`No active context`)
  }
}

export class DuplicateContextDataError extends InfraScriptError {
  constructor(contextName: string) {
    super(`Context ${contextName} initialData provided twice`)
  }
}

export class DuplicateURNError extends InfraScriptError {
  constructor(urn: string) {
    super(`Duplicate URN: ${urn}`)
  }
}
