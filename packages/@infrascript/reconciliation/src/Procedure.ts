export interface Procedure {
  [Symbol.asyncIterator]: () => AsyncGenerator<Procedure[], Error | undefined, void>
}

export class ExampleProcedure implements Procedure {
  async *[Symbol.asyncIterator](): AsyncGenerator<Procedure[], Error | undefined, void> {
    console.log('return procedure one response')
    yield* new WaitSubProcedure()

    console.log('return procedure two response')
    yield Promise.resolve([])

    console.log('return procedure three response')
    yield Promise.resolve([])

    console.log('return procedure four response')
    yield Promise.resolve([])

    console.log('return procedure fifth response')
    yield Promise.resolve([new WaitSubProcedure(), new WaitSubProcedure()])

    return undefined
  }
}

function sleep(delay: number): Promise<void> {
  return new Promise<void>((resolve) => setTimeout(() => resolve(), delay))
}

export class WaitSubProcedure implements Procedure {
  // eslint-disable-next-line require-yield
  async *[Symbol.asyncIterator](): AsyncGenerator<Procedure[], Error | undefined, void> {
    console.log('run wait procedure')
    await sleep(1000)
    return undefined
  }
}
