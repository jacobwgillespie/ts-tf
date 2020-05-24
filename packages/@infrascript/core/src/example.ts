/* eslint-disable @typescript-eslint/no-non-null-assertion */
import 'source-map-support/register'

import {codeFrameColumns} from '@babel/code-frame'
import {parse as parseErrorStack} from 'error-stack-parser'
import fs from 'fs-extra'
import {Namespace} from './Namespace'
import {ExampleResource1, ExampleResource2, globalRoot} from './Resource'

async function run() {
  const r1 = new ExampleResource1('resource', {prop1: 1, prop2: '2'})
  console.log(r1)

  const r2 = new ExampleResource2('resource2', {prop1: 1, prop2: r1.prop2})
  console.log(r2)

  const customNamespace = new Namespace('custom')
  await customNamespace.$asParent(() => {
    const r3 = new ExampleResource1('resource', {prop1: 1, prop2: r1.prop2})
    console.log(r3)
  })

  const graph = globalRoot().$dependentsGraph
  console.log('nodes', graph.nodes())
  console.log('edges', graph.edges())
  console.log(graph.dot((n) => n.$urn))
}

function indent(count: number, source: string): string {
  return source.replace(/^(?!\s*$)/gm, ' '.repeat(count))
}

run().catch(async (error: Error) => {
  console.error(`ERROR: ${error.message}`)
  const stack = parseErrorStack(error)
  for (const line of stack) {
    if (line.fileName?.startsWith(process.cwd())) {
      const source = (await fs.readFile(line.fileName)).toString('utf8')
      console.error(indent(2, `${line.source!.trim()}:\n`))
      console.error(
        indent(
          4,
          codeFrameColumns(
            source,
            {start: {line: line.lineNumber!, column: line.columnNumber!}},
            {highlightCode: true},
          ),
        ),
      )
      console.error('\n')
    } else {
      console.log(line.source)
    }
  }
  process.exit(1)
})
