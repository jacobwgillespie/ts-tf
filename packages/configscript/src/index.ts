import 'source-map-support/register'
import path from 'path'
import {lint} from './lint'
import {registerConfigScript} from './register'

// eslint-disable-next-line functional/functional-parameters,@typescript-eslint/explicit-function-return-type,@typescript-eslint/require-await
async function main() {
  // eslint-disable-next-line functional/no-expression-statement
  registerConfigScript()

  const cwd = process.cwd()
  const scriptPath = require.resolve(path.join(cwd, process.argv[3] ?? '.'))

  switch (process.argv[2]) {
    case 'run':
      // eslint-disable-next-line functional/no-expression-statement
      lint([scriptPath])
      // eslint-disable-next-line functional/no-expression-statement
      require(scriptPath)
      break

    case 'lint':
      // eslint-disable-next-line functional/no-expression-statement
      lint([scriptPath])
      break

    default:
      // eslint-disable-next-line functional/no-throw-statement
      throw new Error('Usage: config [run|lint]')
  }
}

main().catch((error: Error) => {
  console.log(error.stack)
  // eslint-disable-next-line functional/no-expression-statement
  process.exit(1)
})
