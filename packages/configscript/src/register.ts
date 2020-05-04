import {register as tsNodeRegister, Register} from 'ts-node'
import * as ts from 'typescript'
import {defaultCompilerOptions} from './typescript'

export function registerConfigScript(compilerOptions: ts.CompilerOptions = defaultCompilerOptions): Register {
  return tsNodeRegister({
    transpileOnly: true,
    compilerOptions: {...compilerOptions, allowJs: true},
    preferTsExts: true,
    ignore: [],
  })
}
