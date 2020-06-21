import {reconcile} from './Loop'
import {ExampleProcedure, IAMUserProcedure, TFExampleProcedure} from './Procedure'
import * as aws from '@ts-terraform/provider-aws'

const EVENT_TYPES = new Set()
EVENT_TYPES.add('create')
EVENT_TYPES.add('update')
EVENT_TYPES.add('delete')

async function run(): Promise<void> {
  if (process.argv.length !== 3 || !EVENT_TYPES.has(process.argv[2].toLowerCase())) {
    throw new Error('Invalid event type')
  }

  const evt = process.argv[2]
  const procedure = new ExampleProcedure()
  const awsProcedure = new IAMUserProcedure('test-user-infrascript')
  const provider = await aws.createProvider()
  await provider.configure({region: 'us-east-2'})
  const tfProcedure = new TFExampleProcedure(evt, provider)
  await reconcile([procedure, awsProcedure, tfProcedure])
}

run().catch((error: Error) => {
  console.log(error.stack)
  process.exit(1)
})
