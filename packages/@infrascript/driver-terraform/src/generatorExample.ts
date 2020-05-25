/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import 'source-map-support/register'
import fastCase from 'fast-case'
import fs from 'fs-extra'
import path from 'path'
import {buildBlockInterface} from './generator'
import {ProvidersSchema} from './types/ProvidersSchema'
import {formatTypeScript} from './prettier'

async function run(): Promise<void> {
  const schema: ProvidersSchema = await fs.readJSON('providers.json')

  for (const providerName of Object.keys(schema.provider_schemas)) {
    const providerSchema = schema.provider_schemas[providerName]
    // console.log(`Provider ${providerName}:`)
    // console.log(providerSchema.provider.block)
    // console.log(buildBlockInterface(providerName, providerSchema.provider.block, true).code)

    for (const resourceName of Object.keys(providerSchema.resource_schemas)) {
      const resource = providerSchema.resource_schemas[resourceName]
      const cleanedName = resourceName.replace('aws_', '')
      // const argsInterface = buildBlockInterface(cleanedName, resource.block, true)
      const attrsInterface = buildBlockInterface(cleanedName, resource.block)

      const pascalName = fastCase.pascalize(cleanedName)
      const filename = path.join(process.cwd(), 'src/__generated__/aws', `${pascalName}.ts`)
      await fs.mkdirp(path.dirname(filename))

      const props = Object.keys(resource.block.attributes || {}).map((prop) => `${prop} = this.$attr('${prop}')`)

      await fs.writeFile(
        filename,
        formatTypeScript(`
import {TerraformResource} from '../../TerraformResource'

${attrsInterface.code}

export class ${pascalName} extends TerraformResource<${attrsInterface.name}> {
  get __kind(): '${resourceName}' {
    return '${resourceName}'
  }

  ${props.join('\n')}
}
      `),
      )
    }

    // for (const dataSourceName of Object.keys(providerSchema.data_source_schemas)) {
    //   const dataSource = providerSchema.data_source_schemas[dataSourceName]
    //   console.log(buildBlockInterface(dataSourceName, dataSource.block, true).code)
    //   console.log(buildBlockInterface(dataSourceName, dataSource.block).code)
    // }
  }
}

run().catch((error: Error) => {
  console.log(error.stack)
  process.exit(1)
})
