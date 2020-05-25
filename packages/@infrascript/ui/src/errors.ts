import {codeFrameColumns} from '@babel/code-frame'
import {parse as parseErrorStack} from 'error-stack-parser'
import * as fs from 'fs'
import * as path from 'path'
import {indent} from './utilities'

export function prettyPrintError(error: Error): void {
  console.error(`ERROR: ${error.message}`)
  const stack = parseErrorStack(error)
  for (const line of stack) {
    const {fileName, source, lineNumber, columnNumber} = line

    const resolvedPath = fileName !== undefined ? path.resolve(fileName) : undefined
    const localPath = resolvedPath?.startsWith(process.cwd()) ? resolvedPath : undefined

    if (localPath !== undefined && source !== undefined && lineNumber !== undefined && columnNumber !== undefined) {
      const source = fs.readFileSync(localPath).toString('utf8')
      console.error(indent(2, `${source.trim()}:\n`))
      console.error(
        indent(4, codeFrameColumns(source, {start: {line: lineNumber, column: columnNumber}}, {highlightCode: true})),
      )
      console.error('\n')
    } else {
      console.log(line.source)
    }
  }
}
