type ProcedureResponse = {
  error?: Error
  subProcedures: Procedure[]
}

export interface Procedure {
  execute: () => AsyncGenerator<ProcedureResponse, Error | undefined, void>
}

export class ExampleProcedure implements Procedure {
  async *execute(): AsyncGenerator<ProcedureResponse, Error | undefined, void> {
    console.log('return procedure one response')
    yield new Promise<ProcedureResponse>((resolve) => resolve({subProcedures: [new ExampleSubProcedure()]}))

    console.log('return procedure two response')
    yield new Promise<ProcedureResponse>((resolve) => resolve({subProcedures: []}))

    console.log('return procedure three response')
    yield new Promise<ProcedureResponse>((resolve) => resolve({subProcedures: []}))

    console.log('return procedure four response')
    yield new Promise<ProcedureResponse>((resolve) => resolve({subProcedures: []}))

    return undefined
  }
}

export class ExampleSubProcedure implements Procedure {
  async *execute(): AsyncGenerator<ProcedureResponse, Error | undefined, void> {
    console.log('return sub procedure response')
    yield new Promise<ProcedureResponse>((resolve) => resolve({subProcedures: []}))
    return undefined
  }
}
