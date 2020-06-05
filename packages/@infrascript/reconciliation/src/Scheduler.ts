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

      //const err = this._runProcedures(procedures)
      //if (err) {
      //  console.error(err)
      //  return err
      //}
    }

    return undefined
  }

  /*private _runProcedures(procedures: Procedure[]): Error | undefined {
    for (const pro of procedures) {
      this.#steps++
      this._executeProcedure(pro)
      //if (error) {
      //  console.error(error)
      //  return error
      //}
      //
      //if (subProcedures.length > 0) {
      //  const error = this._runProcedures(subProcedures)
      //  if (error) {
      //    console.log(error)
      //    return error
      //  }
      //}
    }

    return undefined
  }*/

  private async _executeProcedure(pro: Procedure): Promise<Error | undefined> {
    const generator = pro.execute()
    for await (const result of generator) {
      if (result.subProcedures.length > 0) {
        await this.execute(result.subProcedures)
      }
    }
    //let result = await generator.next()
    //while (!result.done) {
    //  if (result.value.subProcedures.length > 0) {
    //    await this.execute(result.value.subProcedures)
    //  }
    //  result = await generator.next()
    //}

    return undefined
  }

  get steps(): number {
    return this.#steps
  }
}
