import {Procedure} from './Procedure'

export class Scheduler {
  #steps = 0

  execute(procedures: Procedure[]): Error | undefined {
    this.#steps = 0
    const toBeExecuted = procedures
    // eslint-disable-next-line no-constant-condition,@typescript-eslint/no-unnecessary-condition
    while (true) {
      if (toBeExecuted.length == 0) {
        break
      }

      this.#steps++
      const pro = toBeExecuted[0]
      const err = this._executeProcedure(pro)
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

  private _executeProcedure(pro: Procedure): Error | undefined {
    const generator = pro.execute()
    let result = generator.next()
    while (!result.done) {
      if (result.value.subProcedures.length > 0) {
        this.execute(result.value.subProcedures)
      }
      result = generator.next()
    }

    return undefined
  }

  get steps(): number {
    return this.#steps
  }
}
