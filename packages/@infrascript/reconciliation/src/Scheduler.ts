import {Procedure} from './Procedure'

export class Scheduler {
  async execute(procedures: Procedure[]): Promise<Error | undefined> {
    const toBeExecuted = procedures
    // eslint-disable-next-line no-constant-condition,@typescript-eslint/no-unnecessary-condition
    while (true) {
      if (toBeExecuted.length == 0) {
        break
      }

      const pro = toBeExecuted[0]
      const err = await this._executeProcedure(pro)
      if (err) {
        console.error(err)
        return err
      } else {
        toBeExecuted.shift()
      }
    }

    return undefined
  }

  async parallelExecute(procedures: Procedure[]): Promise<Error | undefined> {
    // eslint-disable-next-line no-constant-condition,@typescript-eslint/no-unnecessary-condition
    const promiseArr: Promise<Error | undefined>[] = []
    procedures.forEach((pro) => promiseArr.push(this._executeProcedure(pro)))
    try {
      const results = await Promise.allSettled(promiseArr)
      let result = undefined
      results.forEach((err) => {
        if (err) {
          result = err
        }
      })
      return result
    } catch (error) {
      console.error(error)
      return error as Error
    }
  }

  private async _executeProcedure(pro: Procedure): Promise<Error | undefined> {
    const generator = pro[Symbol.asyncIterator]()
    for await (const subProcedures of generator) {
      if (subProcedures.length > 0) {
        const complete = await this.execute(subProcedures)
        if (err) {
          return err
        }
      }
    }

    return true
  }
}
