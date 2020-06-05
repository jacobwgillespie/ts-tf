import {fromDynamic, Provider, toDynamic} from '@infrascript/terraform-provider-client'

async function run() {
  // Initialize a new provider from a binary, with debug logs
  const binaryPath = '.terraform/plugins/darwin_amd64/terraform-provider-aws_v2.64.0_x4'
  const provider = await Provider.fromBinary(binaryPath, {debug: true})

  // Configure the provider
  const configSchema = await provider.getConfigureSchemaType()
  await provider.configure({region: 'us-east-1'}, configSchema)

  // Read all AWS regions
  const regions = await provider.readDataSource({
    typeName: 'aws_regions',
    config: toDynamic({all_regions: true, id: null, names: null, filter: null}),
  })
  console.log(fromDynamic(regions.state))

  // Shut down the provider
  await provider.shutdown()
}

run().catch((error: Error) => {
  console.log(error.stack)
  process.exit(1)
})
