import {Procedure} from './Procedure'

export class Scheduler {
  #steps = 0

  async execute(procedures: Procedure[]): Promise<Error | undefined> {
    this.#steps = 0
    const toBeExecuted = procedures
    // eslint-disable-next-line no-constant-condition,@typescript-eslint/no-unnecessary-condition
    while (true) {
      if (toBeExecuted.length == 0) {
        break
      }

      this.#steps++
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

  private async _executeProcedure(pro: Procedure): Promise<Error | undefined> {
    const generator = pro[Symbol.asyncIterator]()
    for await (const subProcedures of generator) {
      if (subProcedures.length > 0) {
        await this.execute(subProcedures)
      }
    }

    return undefined
  }

  get steps(): number {
    return this.#steps
  }
}
