import 'source-map-support/register'
import path from 'path'
import {lint} from './lint'
import {registerinfrascript} from './register'

// eslint-disable-next-line @typescript-eslint/require-await
async function main(): Promise<void> {
  // eslint-disable-next-line functional/no-expression-statement
  registerinfrascript()

  const cwd = process.cwd()
  const scriptPath = require.resolve(path.join(cwd, process.argv[3] ?? '.'))

  switch (process.argv[2]) {
    case 'run':
      if (!lint([scriptPath])) {
        process.exit(1)
      }
      // eslint-disable-next-line functional/no-expression-statement
      require(scriptPath)
      break

    case 'lint':
      if (!lint([scriptPath])) {
        process.exit(1)
      }
      break

    default:
      // eslint-disable-next-line functional/no-throw-statement
      throw new Error('Usage: config [run|lint]')
  }
}

main().catch((error: Error) => {
  console.log(error.stack)
  process.exit(1)
})
