import {reconcile} from './Loop'
import {ExampleProcedure} from './Procedure'

async function run(): Promise<void> {
  const procedure = new ExampleProcedure()
  await reconcile([procedure])
}

run().catch((error: Error) => {
  console.log(error.stack)
  process.exit(1)
})
