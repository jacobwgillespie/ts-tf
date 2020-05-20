import * as ts from 'typescript'
import {DiagnosticMessage} from './diagnostics'

export const defaultCompilerOptions: ts.CompilerOptions = {
  strict: true,
  noUnusedLocals: true,
  noUnusedParameters: true,
  noImplicitReturns: true,
  noFallthroughCasesInSwitch: true,
}

export function findConfigFile(searchPath = './'): string | undefined {
  return ts.findConfigFile(searchPath, (fileName: string) => ts.sys.fileExists(fileName), 'tsconfig.json')
}

export function typeCheckFiles(
  files: string[],
  options: ts.CompilerOptions = defaultCompilerOptions,
): DiagnosticMessage[] {
  const program = ts.createProgram(files, {...options, noEmit: true})
  // const emitResult = program.emit()
  return formatTSDiagnostics(ts.getPreEmitDiagnostics(program)) //.concat(emitResult.diagnostics)
}

function formatTSDiagnostics(diagnostics: readonly ts.Diagnostic[]): DiagnosticMessage[] {
  return diagnostics.map((diagnostic) => {
    const {line, character} =
      diagnostic.file && diagnostic.start != undefined
        ? diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start)
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
