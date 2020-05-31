import {fromDynamic, Provider, toDynamic} from '@infrascript/terraform-provider-client'

const providerConfig = {
  access_key: null,
  allowed_account_ids: null,
  forbidden_account_ids: null,
  insecure: null,
  max_retries: null,
  profile: null,
  region: 'us-east-1',
  s3_force_path_style: null,
  secret_key: null,
  shared_credentials_file: null,
  skip_credentials_validation: null,
  skip_get_ec2_platforms: null,
  skip_metadata_api_check: null,
  skip_region_validation: null,
  skip_requesting_account_id: null,
  token: null,
  assume_role: null,
  endpoints: null,
  ignore_tags: null,
}

async function run() {
  // Initialize a new provider from a binary, with debug logs
  const binaryPath = '.terraform/plugins/darwin_amd64/terraform-provider-aws_v2.64.0_x4'
  const provider = await Provider.fromBinary(binaryPath, {debug: true})

  // Get the provider schema
  const providerSchema = await provider.getSchema({})
  console.log(providerSchema.dataSourceSchemas['aws_regions'])

  // Configure the provider
  await provider.configure({terraformVersion: '0.12.26', config: toDynamic(providerConfig)})

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
