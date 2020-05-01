import Module from 'module'
import {resolve} from 'path'
import {register} from 'ts-node'

export function run() {
  const cwd = process.cwd()
  const scriptPath = resolve(cwd, process.argv[3] || '.')

  register({
    compilerOptions: {
      strict: true,
      noUnusedLocals: true,
      noUnusedParameters: true,
      noImplicitReturns: true,
      noFallthroughCasesInSwitch: true,
    },
  })

  const module = new Module(scriptPath)
  module.filename = scriptPath
  module.paths = (Module as any)._nodeModulePaths(cwd)
  // ;(Module as any)._preloadModules(requires)

  // process.execArgv.unshift(__filename, ...process.argv.slice(2, process.argv.length - args._.length))
  process.argv = [process.argv[1]].concat(scriptPath || []) //.concat(args._.slice(1))
  Module.runMain()
}
