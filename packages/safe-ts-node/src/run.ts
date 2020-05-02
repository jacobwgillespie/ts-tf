// import Module from 'module'
import {resolve} from 'path'
import {register} from 'ts-node'
import {CLIEngine} from 'eslint'
import lintConfig from '@ts-tf/lint-config'
import * as ts from 'typescript'
import chalk from 'chalk'
import path from 'path'

const defaultCompilerOptions: ts.CompilerOptions = {
  strict: true,
  noUnusedLocals: true,
  noUnusedParameters: true,
  noImplicitReturns: true,
  noFallthroughCasesInSwitch: true,
  plugins: [{name: 'typescript-eslint-language-service'}],
}

function typeCheck(fileNames: string[], options: ts.CompilerOptions): readonly ts.Diagnostic[] {
  const program = ts.createProgram(fileNames, {...options, noEmit: true})
  // const emitResult = program.emit()
  return ts.getPreEmitDiagnostics(program) //.concat(emitResult.diagnostics)
}

function formatTSDiagnostics(diagnostics: readonly ts.Diagnostic[]) {
  return diagnostics.map((diagnostic) => {
    const {line, character} = diagnostic.file
      ? diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start!)
      : {
          line: 0,
          character: 0,
        }
    return {
      file: diagnostic.file ? diagnostic.file.fileName : '',
      line: line + 1,
      column: character + 1,
      error: diagnostic.category === ts.DiagnosticCategory.Error,
      message: ts.formatDiagnosticsWithColorAndContext([diagnostic], {
        getNewLine: () => ts.sys.newLine,
        getCurrentDirectory: () => process.cwd(),
        getCanonicalFileName: ts.sys.useCaseSensitiveFileNames ? (x) => x : (x) => x.toLowerCase(),
      }),
    }
  })
}

function formatESLintResults(results: CLIEngine.LintResult[]) {
  return results.flatMap((result) => {
    const relativePath = chalk.cyan(path.relative(process.cwd(), result.filePath))
    const sourceLines = (result.source || '').split('\n')

    return result.messages.map((message) => {
      const firstLine = message.line
      const lastLine = message.endLine || message.line

      const line = chalk.yellow(message.line)
      const column = chalk.yellow(message.column)
      const severity =
        message.severity === 2
          ? chalk.red('error')
          : message.severity === 1
          ? chalk.yellow('warning')
          : chalk.gray('info')
      const ruleID = chalk.gray(message.ruleId)

      const gutterWidth = String(lastLine).length
      const relevantSourceLine = sourceLines[firstLine - 1]
      const lineNumber = chalk.black.bgWhite(String(firstLine).padStart(gutterWidth, ' '))
      const emptyGutter = chalk.black.bgWhite(String('').padStart(gutterWidth, ' '))

      const lastCharForLine = (message.line === message.endLine ? message.endColumn : null) || relevantSourceLine.length
      const prefix = relevantSourceLine.slice(0, message.column - 1).replace(/\S/g, ' ')
      const squiggle = (message.severity === 2 ? chalk.red : chalk.cyan)(
        relevantSourceLine.slice(message.column - 1, lastCharForLine - 1).replace(/./g, '~'),
      )

      return {
        file: result.filePath,
        line: message.line,
        column: message.column,
        error: message.severity === 2,
        message: `${relativePath}:${line}:${column} - ${severity} ${message.message} ${ruleID}

${lineNumber} ${relevantSourceLine}
${emptyGutter} ${prefix}${squiggle}`,
      }
    })
  })
}

type DiagnosticMessage = {
  file: string
  line: number
  column: number
  error: boolean
  message: string
}

function sortDiagnosticMessages(messages: DiagnosticMessage[]): DiagnosticMessage[] {
  return messages.sort((a, b) => {
    const filenameComparison = a.file.localeCompare(b.file)
    if (filenameComparison !== 0) {
      return filenameComparison
    }
    const lineDifference = a.line - b.line
    return lineDifference === 0 ? a.column - b.column : lineDifference
  })
}

function pluralize(number: number, singular: string, plural: string): string {
  return number === 1 ? singular : plural
}

export function run() {
  const cwd = process.cwd()
  const scriptPath = resolve(cwd, process.argv[3] || '.')

  const tsDiagnostics = typeCheck([scriptPath], defaultCompilerOptions)

  const cli = new CLIEngine({
    baseConfig: {
      ...lintConfig,
      parserOptions: {
        ...(lintConfig.parserOptions || {}),
        tsconfigRootDir: process.cwd(),
        project: ['./tsconfig.json'],
      },
    },
    cwd: process.cwd(),
    extensions: ['.js', '.ts'],
    resolvePluginsRelativeTo: require.resolve('@ts-tf/lint-config'),
    useEslintrc: false,
  })
  const report = cli.executeOnFiles(['.'])

  const allIssues = sortDiagnosticMessages([
    ...formatESLintResults(report.results),
    ...formatTSDiagnostics(tsDiagnostics),
  ])

  const errorCount = allIssues.filter((issue) => issue.error).length
  const warningCount = allIssues.length - errorCount

  console.log(allIssues.map((issue) => issue.message).join('\n\n'))

  if (warningCount > 0) {
    console.log()
    console.log(chalk.yellow(`${warningCount} ${pluralize(warningCount, 'warning', 'warnings')}`))
  }

  if (errorCount > 0) {
    console.log()
    console.log(chalk.red(`${errorCount} ${pluralize(errorCount, 'error', 'errors')}`))
    process.exit(1)
  }

  register({
    transpileOnly: true,
    compilerOptions: defaultCompilerOptions,
  })

  require(scriptPath)

  // const module = new Module(scriptPath)
  // module.filename = scriptPath
  // module.paths = (Module as any)._nodeModulePaths(cwd)
  // // ;(Module as any)._preloadModules(requires)

  // // process.execArgv.unshift(__filename, ...process.argv.slice(2, process.argv.length - args._.length))
  // process.argv = [process.argv[1]].concat(scriptPath || []) //.concat(args._.slice(1))
  // Module.runMain()
}
