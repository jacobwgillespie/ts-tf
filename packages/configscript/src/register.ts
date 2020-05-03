import {register as tsNodeRegister} from 'ts-node'
import * as ts from 'typescript'
import {defaultCompilerOptions} from './typescript'

// eslint-disable-next-line functional/no-return-void
export function registerConfigScript(compilerOptions: ts.CompilerOptions = defaultCompilerOptions): void {
  // eslint-disable-next-line functional/no-expression-statement
  tsNodeRegister({
    transpileOnly: true,
    compilerOptions,
    preferTsExts: true,
  })
}
