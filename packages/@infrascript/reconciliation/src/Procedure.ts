type ProcedureResponse = {
  error?: Error
  subProcedures: Procedure[]
}

export interface Procedure2 {
  execute: (count: number) => IterableIterator<number>
}

export interface Procedure {
  execute: () => IterableIterator<ProcedureResponse>
}

export class ExampleProcedure implements Procedure {
  *execute(): IterableIterator<ProcedureResponse> {
    console.log('return procedure one response')
    yield {subProcedures: [new ExampleSubProcedure()]}

    console.log('return procedure two response')
    yield {subProcedures: []}

    console.log('return procedure three response')
    yield {subProcedures: []}

    console.log('return procedure four response')
    yield {subProcedures: []}
  }
}

export class ExampleSubProcedure implements Procedure {
  *execute(): IterableIterator<ProcedureResponse> {
    console.log('return sub procedure response')
    const x: ProcedureResponse = {
      subProcedures: [],
    }

    yield x
  }
}
