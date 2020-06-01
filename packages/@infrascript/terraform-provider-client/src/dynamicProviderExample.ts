import {DynamicProvider} from './DynamicProvider'
import {Provider} from './Provider'
import {validate as validateSchema} from './TypeSystem'

async function run() {
  // Initialize a new provider from a binary, with debug logs
  const binaryPath = '../driver-terraform/.terraform/plugins/darwin_amd64/terraform-provider-aws_v2.64.0_x4'
  const provider = await Provider.fromBinary(binaryPath, {debug: true})

  const dynamicProvider = new DynamicProvider(provider)

  const configSchema = await dynamicProvider.getConfigureSchemaType()
  console.log(configSchema)
  console.log(validateSchema(configSchema, {access_key: ['false', 123], region: 'us-east-1'}))

  // Get the provider schema
  // const providerSchema = await provider.getSchema({})

  // Shut down the provider
  await provider.shutdown()
}

run().catch((error: Error) => {
  console.log(error.stack)
  process.exit(1)
})
