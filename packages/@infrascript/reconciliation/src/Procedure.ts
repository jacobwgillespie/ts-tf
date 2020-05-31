type ProcedureResponse = {
  error?: Error
  subProcedures: Procedure[]
}

export interface Procedure {
  name: string
  execute: () => ProcedureResponse
}

export class ExampleProcedure implements Procedure {
  name = 'ExampleProcedure'
  execute(): ProcedureResponse {
    const x: ProcedureResponse = {
      subProcedures: [],
    }
    return x
  }
}
