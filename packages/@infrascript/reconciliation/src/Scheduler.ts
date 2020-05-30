import {Procedure} from './Procedure'
import {Plan} from './Plan'

export class Scheduler {
  #steps = 0

  executePlan(plan: Plan): Error | undefined {
    this.#steps = 0

    // eslint-disable-next-line no-constant-condition,@typescript-eslint/no-unnecessary-condition
    while (true) {
      const {procedures, error} = plan.create()
      if (error) {
        console.error(error)
        return error
      }

      if (procedures.length == 0) {
        break
      }

      const err = this._runProcedures(procedures)
      if (err) {
        console.error(err)
        return err
      }
    }

    return undefined
  }

  private _runProcedures(procedures: Procedure[]): Error | undefined {
    for (const pro of procedures) {
      this.#steps++
      const {subProcedures, error} = pro.execute()
      if (error) {
        console.error(error)
        return error
      }

      if (subProcedures.length > 0) {
        const error = this._runProcedures(subProcedures)
        if (error) {
          console.log(error)
          return error
        }
      }
    }

    return undefined
  }

  get steps(): number {
    return this.#steps
  }
}
