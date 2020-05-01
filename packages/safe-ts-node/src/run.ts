import Module from 'module'
import {resolve} from 'path'
import {register} from 'ts-node'

/**
 * Main `bin` functionality.
 */
export function run() {
  const cwd = process.cwd()
  /** Unresolved.  May point to a symlink, not realpath.  May be missing file extension */
  const scriptPath = resolve(cwd, process.argv[3] || '.')

  // Register the TypeScript compiler instance.
  register({
    // dir: getCwd(dir, scriptMode, scriptPath),
    // emit,
    // files,
    // pretty,
    // transpileOnly,
    // typeCheck,
    // compilerHost,
    // ignore,
    // preferTsExts,
    // logError,
    // project,
    // skipProject,
    // skipIgnore,
    // compiler,
    // ignoreDiagnostics,
    // compilerOptions,
  })

  // Create a local module instance based on `cwd`.
  const module = new Module(scriptPath)
  module.filename = scriptPath
  module.paths = (Module as any)._nodeModulePaths(cwd)

  // Require specified modules before start-up.
  // ;(Module as any)._preloadModules(requires)

  // Prepend `ts-node` arguments to CLI for child processes.
  // process.execArgv.unshift(__filename, ...process.argv.slice(2, process.argv.length - args._.length))
  process.argv = [process.argv[1]].concat(scriptPath || []) //.concat(args._.slice(1))

  Module.runMain()
}
