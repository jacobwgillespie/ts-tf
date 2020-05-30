import { Scheduler } from "./Scheduler";
import { GenericPlan } from "./Plan";

export class Loop {
    reconcile(): void {
        const scheduler = new Scheduler()
        while(true) {
            console.log("starting reconciliation loop")
            const error = scheduler.executePlan(new GenericPlan())
            if (error) {
                console.warn(error)
            }
        }
    }
}
