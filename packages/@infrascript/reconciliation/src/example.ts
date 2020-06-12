import {reconcile} from './Loop'
import {ExampleProcedure, IAMUserProcedure} from './Procedure'
import {createProvider} from 'ts-terraform'

const binaryPath = '../driver-terraform/.terraform/plugins/darwin_amd64/terraform-provider-aws_v2.64.0_x4'

async function run(): Promise<void> {
  const procedure = new ExampleProcedure()
  const awsProcedure = new IAMUserProcedure('test-user-infrascript')
  const provider = await createProvider(binaryPath)
  provider.crea
  new TFProcedure(provider)
  await reconcile([procedure, awsProcedure])
}

run().catch((error: Error) => {
  console.log(error.stack)
  process.exit(1)
})
