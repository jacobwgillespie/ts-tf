const schema = require('../schema.json')
const pkg = require('../package.json')
const fs = require('fs-extra')
const prettier = require('prettier')
const fastCase = require('fast-case')

function tfTypeToTSType(type) {
  if (typeof type === 'string') {
    switch (type) {
      case 'bool':
        return 'boolean'

      case 'number':
        return 'number'

      case 'string':
        return 'string'

      default:
        return assertNever(type)
    }
  }

  switch (type[0]) {
    case 'list':
      return `Array<${tfTypeToTSType(type[1])}>`

    case 'map':
      return `{[key: string]: ${tfTypeToTSType(type[1])}}`

    case 'object':
      const keyTypes = Object.keys(type[1]).map((key) => `"${key}": ${tfTypeToTSType(type[1][key])}`)
      return `{${keyTypes.join(', ')}}`

    case 'set':
      return `Set<${tfTypeToTSType(type[1])}>`

    default:
      return assertNever(type)
  }
}

async function run() {
  const providerSchemas = schema.provider_schemas
  const awsSchema = providerSchemas.aws

  const awsResources = awsSchema.resource_schemas

  const resourceNames = Object.keys(awsResources)

  const classNames = []

  for (const resourceName of resourceNames) {
    console.log(resourceName)
    const resource = awsResources[resourceName]

    const className = fastCase.pascalize(resourceName.replace(/^aws_/, ''))
    classNames.push(className)

    console.log(JSON.stringify(resource, null, 2))

    const attributes = resource.block.attributes || {}
    const attributeNames = Object.keys(attributes)

    const argumentsInterfaceName = `${className}Arguments`
    const argumentsInterfaceType = `interface ${argumentsInterfaceName} {
    ${attributeNames
      .map((attributeName) => {
        const attribute = attributes[attributeName]

        if (attribute.computed && !attribute.optional) {
          return null
        }

        const optional = !attribute.required && attribute.optional ? '?' : ''
        const description = attribute.description ? `/** ${attribute.description} */\n  ` : ''

        return `${description}"${attributeName}"${optional}: ${tfTypeToTSType(attribute.type)}`
      })
      .filter((s) => s)
      .join('\n  ')}
  }`

    const attributesInterfaceName = `${className}Attributes`
    const attributesInterfaceType = `interface ${attributesInterfaceName} {
    ${attributeNames
      .map((attributeName) => {
        const attribute = attributes[attributeName]

        const optional = !attribute.computed && attribute.optional ? '?' : ''
        const description = attribute.description ? `/** ${attribute.description} */\n  ` : ''

        return `${description}"${attributeName}"${optional}: ${tfTypeToTSType(attribute.type)}`
      })
      .filter((s) => s)
      .join('\n  ')}
  }`

    const code = `
import {Resource} from '../Resource'

export ${argumentsInterfaceType}

export ${attributesInterfaceType}

export class ${className} extends Resource<${argumentsInterfaceName}, ${attributesInterfaceName}> {
  _kind = "${resourceName}"

  ${attributeNames
    .map((attributeName) => `get ${attributeName}() { return this._attr('${attributeName}') }`)
    .join('\n\n')}
}
  `

    await fs.writeFile(`./src/aws/${className}.ts`, prettier.format(code, {...pkg.prettier, parser: 'typescript'}))
  }

  const indexCode = `
${classNames.map((name) => `export * from './${name}'`).join('\n')}
`

  await fs.writeFile('./src/aws/index.ts', prettier.format(indexCode, {...pkg.prettier, parser: 'typescript'}))
}

run().catch((err) => {
  console.error(err.stack)
  process.exit(1)
})
