import 'source-map-support/register'

import fastCase from 'fast-case'
import fs from 'fs-extra'
import path from 'path'
import {generateResourceClass} from './generator'
import {ProvidersSchema} from './types/ProvidersSchema'

async function run(): Promise<void> {
  const schema = (await fs.readJSON('schema.json')) as ProvidersSchema

  for (const providerName of Object.keys(schema.provider_schemas)) {
    const providerSchema = schema.provider_schemas[providerName]

    for (const resourceName of Object.keys(providerSchema.resource_schemas)) {
      const resourceSchema = providerSchema.resource_schemas[resourceName]
      const pascalName = fastCase.pascalize(resourceName.replace('aws_', ''))
      const filename = path.join(process.cwd(), 'src/__generated__/aws', `${pascalName}.ts`)
      await fs.mkdirp(path.dirname(filename))

      await fs.writeFile(filename, generateResourceClass(pascalName, resourceSchema))
    }
  }
}

q
