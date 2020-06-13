import 'source-map-support/register'
import * as aws from '@ts-terraform/provider-aws'

async function run() {
  const awsProvider = await aws.createProvider()
  await awsProvider.configure({region: 'us-east-1'})
  const regions = await awsProvider.readDataSource('aws_regions', {all_regions: true})
  console.log(regions)
  await awsProvider.shutdown()
}

run().catch((error: Error) => {
  console.log(error.stack)
  process.exit(1)
})
