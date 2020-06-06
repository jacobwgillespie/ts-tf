import 'source-map-support/register'
import * as aws from './AwsProvider'
import {codegen, createProvider} from './Provider'

async function run() {
  // Code-generate an AWS provider class
  const binaryPath = '../driver-terraform/.terraform/plugins/darwin_amd64/terraform-provider-aws_v2.64.0_x4'
  const provider = await createProvider(binaryPath)
  console.log(codegen(provider))
  await provider.shutdown()

  // Use a code-generated provider
  const awsProvider = await aws.createProvider(binaryPath)
  await awsProvider.configure({region: 'us-east-1'})
  const regions = await awsProvider.readDataSource('aws_regions', {all_regions: true})
  console.log(regions)
  await awsProvider.shutdown()
}

run().catch((error: Error) => {
  console.log(error.stack)
  process.exit(1)
})
