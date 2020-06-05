type ProcedureResponse = {
  error?: Error
  subProcedures: Procedure[]
}

export interface Procedure {
  [Symbol.asyncIterator]: () => AsyncGenerator<ProcedureResponse, Error | undefined, void>
}

export class ExampleProcedure implements Procedure {
  async *[Symbol.asyncIterator](): AsyncGenerator<ProcedureResponse, Error | undefined, void> {
    console.log('return procedure one response')
    yield* new WaitSubProcedure()

    console.log('return procedure two response')
    const r2 = new Promise<ProcedureResponse>((resolve) => resolve({subProcedures: []}))
    yield r2

    console.log('return procedure three response')
    const r3 = new Promise<ProcedureResponse>((resolve) => resolve({subProcedures: []}))
    yield r3

    console.log('return procedure four response')
    const r4 = new Promise<ProcedureResponse>((resolve) => resolve({subProcedures: []}))
    yield r4

    return undefined
  }
}

export class ExampleSubProcedure implements Procedure {
  async *[Symbol.asyncIterator](): AsyncGenerator<ProcedureResponse, Error | undefined, void> {
    console.log('return sub procedure response')
    yield {subProcedures: []}
    return undefined
  }
}

function sleep(delay: number): Promise<void> {
  return new Promise<void>((resolve) => setTimeout(() => resolve(), delay))
}

export class WaitSubProcedure implements Procedure {
  // eslint-disable-next-line require-yield
  async *[Symbol.asyncIterator](): AsyncGenerator<ProcedureResponse, Error | undefined, void> {
    await sleep(1000)
    return undefined
  }
}
