import {codeFrameColumns} from '@babel/code-frame'
import chalk from 'chalk'
import {parse as parseErrorStack} from 'error-stack-parser'
import * as fs from 'fs'
import * as path from 'path'
import {indent} from './utilities'

export function prettyPrintError(error: Error): void {
  console.error(chalk.red(`ERROR: ${error.message}\n`))
  const stack = parseErrorStack(error)
  for (const line of stack) {
    const {fileName, source, lineNumber, columnNumber} = line

    const resolvedPath = fileName !== undefined ? path.resolve(fileName) : undefined
    const isLocalSourceFile =
      (resolvedPath?.startsWith(process.cwd()) && !resolvedPath.includes('/node_modules/')) ?? false

    if (
      isLocalSourceFile &&
      resolvedPath !== undefined &&
      source !== undefined &&
      lineNumber !== undefined &&
      columnNumber !== undefined
    ) {
      console.error(indent(2, chalk.gray(`${source.trim()}:\n`)))
      const code = fs.readFileSync(resolvedPath).toString('utf8')
      console.error(
        indent(4, codeFrameColumns(code, {start: {line: lineNumber, column: columnNumber}}, {highlightCode: true})),
      )
      console.error('\n')
    } else {
      console.error(chalk.gray(line.source))
    }
  }
}
