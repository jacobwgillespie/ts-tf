import {Scheduler} from './Scheduler'
import {Plan} from './Plan'

export async function reconcile(plan: Plan): Promise<void> {
  const scheduler = new Scheduler()
  // eslint-disable-next-line no-constant-condition,@typescript-eslint/no-unnecessary-condition
  while (true) {
    console.log('starting reconciliation loop')
    const error = scheduler.executePlan(plan)
    if (error) {
      console.warn(error)
    }
  }
}
