import chalk from 'chalk'
import {sortDiagnosticMessages} from './diagnostics'
import {lintFiles} from './eslint'
import {typeCheckFiles} from './typescript'
import {pluralize} from './utils'

// eslint-disable-next-line functional/functional-parameters,functional/no-return-void
export function lint(files: readonly string[]): void {
  const allIssues = sortDiagnosticMessages([...lintFiles(files.concat(['.'])), ...typeCheckFiles(files)])

  const errorCount = allIssues.filter((issue) => issue.error).length
  const warningCount = allIssues.length - errorCount

  if (allIssues.length > 0) {
    console.log()
    console.log(allIssues.map((issue) => issue.message).join('\n\n'))
  }

  if (warningCount > 0) {
    console.log()
    console.log(chalk.yellow(`${warningCount} ${pluralize(warningCount, 'warning', 'warnings')}`))
  }

  if (errorCount > 0) {
    console.log()
    console.log(chalk.red(`${errorCount} ${pluralize(errorCount, 'error', 'errors')}`))
    // eslint-disable-next-line functional/no-expression-statement
    process.exit(1)
  }
}
