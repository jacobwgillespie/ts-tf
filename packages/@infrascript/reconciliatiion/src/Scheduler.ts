import { Procedure } from "../src/Procedure"
import { Plan } from "../src/Plan"

export class Scheduler {
    #steps: number

    executePlan(plan: Plan): Error {
        this.#steps = 0
        while(true) {
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

    private _runProcedures(procedures: Procedure[]): Error {
        procedures.forEach((pro: Procedure) => {
            this.#steps++
            const {subProcedures, error} = pro.execute()
            if (error) {
                console.error(error)
                return error
            }

            if (subProcedures.length > 0) {
                const error = this._runProcedures(subProcedures)
                if(error) {
                    console.log(error)
                    return error
                }
            }
        })

        return undefined
    }
}
