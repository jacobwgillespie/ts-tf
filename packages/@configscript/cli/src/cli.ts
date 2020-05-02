/* eslint-disable functional/functional-parameters,functional/no-loop-statement,functional/no-expression-statement */

import {ProvidersSchema} from '@configscript/types'
import fs from 'fs-extra'
import 'source-map-support/register'
import {buildBlockInterface, buildModuleVariableInterface} from './terraform/types'

async function run(): Promise<void> {
  const schema: ProvidersSchema = await fs.readJSON('providers.json')

  for (const providerName of Object.keys(schema.provider_schemas)) {
    const providerSchema = schema.provider_schemas[providerName]
    console.log(`Provider ${providerName}:`)
    console.log(buildBlockInterface(providerName, providerSchema.provider.block, true).code)

    for (const resourceName of Object.keys(providerSchema.resource_schemas)) {
      const resource = providerSchema.resource_schemas[resourceName]
      console.log(buildBlockInterface(resourceName, resource.block, true).code)
      console.log(buildBlockInterface(resourceName, resource.block).code)
    }

    // for (const dataSourceName of Object.keys(providerSchema.data_source_schemas)) {
    //   const dataSource = providerSchema.data_source_schemas[dataSourceName]
    //   console.log(buildBlockInterface(dataSourceName, dataSource.block, true).code)
    //   console.log(buildBlockInterface(dataSourceName, dataSource.block).code)
    // }

    // console.log(providerSchema.resource_schemas.aws_instance.block)
    // console.log(buildBlockInterface('attrs', providerSchema.resource_schemas.aws_instance.block).code)
    // console.log(buildBlockInterface('args', providerSchema.resource_schemas.aws_instance.block, true).code)
  }

  const moduleSchema = await fs.readJSON('module.json')
  console.log(buildModuleVariableInterface('module', moduleSchema).code)

  // console.log(tfTypeToTSType(parseTypeString('object({ cidrs = map(string), object = map(list(string)) })')))
  // console.log(JSON.stringify(lex('map(string)')))
  // console.log(lex('object({ cidrs = map(string), tags = map(string) })'))
}

run().catch((error) => {
  console.log(error.stack)
  process.exit(1)
})
