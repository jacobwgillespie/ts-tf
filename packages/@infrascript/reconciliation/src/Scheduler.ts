import {Procedure} from './Procedure'

export class Scheduler {
  async execute(procedures: Procedure[]): Promise<boolean> {
    const toBeExecuted = procedures
    // eslint-disable-next-line no-constant-condition,@typescript-eslint/no-unnecessary-condition
    while (true) {
      if (toBeExecuted.length == 0) {
        break
      }

      const pro = toBeExecuted[0]
      const complete = await this._executeProcedure(pro)
      if (!complete) {
        return false
      } else {
        toBeExecuted.shift()
      }
    }

    return true
  }

  async parallelExecute(procedures: Procedure[]): Promise<boolean> {
    // eslint-disable-next-line no-constant-condition,@typescript-eslint/no-unnecessary-condition
    const promiseArr: Promise<boolean>[] = []
    procedures.forEach((pro) => promiseArr.push(this._executeProcedure(pro)))
    try {
      const results = await Promise.all(promiseArr)
      const failureIdx = results.findIndex((result) => !result)
      return failureIdx > -1
    } catch (error) {
      console.error(error)
      return false
    }
  }

  private async _executeProcedure(pro: Procedure): Promise<boolean> {
    const generator = pro[Symbol.asyncIterator]()
    for await (const subProcedures of generator) {
      if (subProcedures.length > 0) {
        const complete = await this.execute(subProcedures)
        if (!complete) {
          return false
        }
      }
    }

    return true
  }
}
