import {validate as validateSchema} from '@infrascript/type-system'
import {Provider} from './Provider'

async function run() {
  // Initialize a new provider from a binary, with debug logs
  const binaryPath = '../driver-terraform/.terraform/plugins/darwin_amd64/terraform-provider-aws_v2.64.0_x4'
  const provider = await Provider.fromBinary(binaryPath, {debug: true})

  const configSchema = await provider.getConfigureSchemaType()
  const options = {region: 'us-east-1'}
  console.log(configSchema)
  console.log(validateSchema(configSchema, options))

  console.log(await provider.configure(options, configSchema))

  // Get the provider schema
  // const providerSchema = await provider.getSchema({})

  // Shut down the provider
  await provider.shutdown()
}

run().catch((error: Error) => {
  console.log(error.stack)
  process.exit(1)
})
