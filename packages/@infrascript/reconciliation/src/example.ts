import {reconcile} from './Loop'
import {ExampleProcedure, IAMUserProcedure, TFExampleProcedure} from './Procedure'
import * as aws from '@ts-terraform/provider-aws'

async function run(): Promise<void> {
  const procedure = new ExampleProcedure()
  const awsProcedure = new IAMUserProcedure('test-user-infrascript')
  const provider = await aws.createProvider()
  await provider.configure({region: 'us-east-2'})
  const tfProcedure = new TFExampleProcedure(provider)
  await reconcile([procedure, awsProcedure, tfProcedure])
}

run().catch((error: Error) => {
  console.log(error.stack)
  process.exit(1)
})
