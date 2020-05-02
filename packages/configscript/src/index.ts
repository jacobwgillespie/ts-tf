import 'source-map-support/register'

import {lint} from './lint'
import {run} from './run'

// eslint-disable-next-line functional/functional-parameters,@typescript-eslint/explicit-function-return-type,@typescript-eslint/require-await
async function main() {
  switch (process.argv[2]) {
    case 'run':
      // eslint-disable-next-line functional/no-expression-statement
      run()
      break

    case 'lint':
      // eslint-disable-next-line functional/no-expression-statement
      lint()
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
