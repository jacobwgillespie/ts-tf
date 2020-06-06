import {reconcile} from './Loop'
import {ExampleProcedure, IAMUserProcedure} from './Procedure'

async function run(): Promise<void> {
  const procedure = new ExampleProcedure()
  const awsProcedure = new IAMUserProcedure('test-user-infrascript')
  await reconcile([procedure, awsProcedure])
}

run().catch((error: Error) => {
  console.log(error.stack)
  process.exit(1)
})
