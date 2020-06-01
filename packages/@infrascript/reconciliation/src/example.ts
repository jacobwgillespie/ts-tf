import {GenericPlan} from './Plan'
import {reconcile} from './Loop'

async function run(): Promise<void> {
  const plan = new GenericPlan()
  await reconcile(plan)
}

run().catch((error: Error) => {
  console.log(error.stack)
  process.exit(1)
})
